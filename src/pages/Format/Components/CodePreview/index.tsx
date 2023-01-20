import styles from './index.less';
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { format } from 'utils/format';
import { EditorView, basicSetup } from 'codemirror';
import { javascript, esLint } from '@codemirror/lang-javascript';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { solarizedLight } from 'cm6-theme-solarized-light';
import { linter } from '@codemirror/lint';
import * as eslint from 'eslint-linter-browserify';
import { Button, Space, notification, Switch, Tooltip } from 'antd';
import { autoTest } from 'utils/autoTest';
import {
  CopyOutlined,
  SaveOutlined,
  BugOutlined,
  LoadingOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { copy, sleep, exportJS, exportJSON } from 'utils/common';
import { useState } from 'react';
let view: EditorView;
const CodePreview = forwardRef<
  { formatSheet: (index?: string) => void },
  { isLoadedSheet: boolean }
>(({ isLoadedSheet }, refName) => {
  const [isPassedTest, setIsPaddedTest] = useState(false); // 是否通过测试
  const [isTesting, setIsTesting] = useState(false); // 是否测试中
  const [formatMode, setFormatMode] = useState('JS'); // 格式化模式:JS/JSON
  const [keyMode, setKeyMode] = useState('WORD'); // KEY值模式

  // 初始化编辑器
  function initEditor(content: string) {
    if (view) {
      view.destroy();
    }
    // 编辑器拓展插件
    const extendsArr = [
      basicSetup,
      formatMode === 'JS' ? javascript() : json(),
      EditorView.lineWrapping,
      solarizedLight,
      EditorView.inputHandler.of(() => {
        setIsPaddedTest(false);
        return false;
      }),
      formatMode === 'JS'
        ? linter(
            esLint(new eslint.Linter(), {
              // eslint configuration
              parserOptions: {
                ecmaVersion: 2019,
                sourceType: 'module',
              },
              env: {
                browser: true,
                node: false,
              },
              rules: {
                semi: ['error', 'never'],
              },
            }),
          )
        : linter(jsonParseLinter()),
    ];
    view = new EditorView({
      doc: content,
      extensions: extendsArr,
      parent: document.querySelector('#code') as HTMLElement,
    });
  }
  // 格式化表格内容
  function formatSheet(index?: string) {
    const [rawStr, JSONStr] = format({ sheetId: index, keyMode });
    if (rawStr.length && !JSONStr) {
      notification.error({
        message: 'JSON转换失败',
        description: '请检查JS格式化是否正常，并上报开发此案例',
      });
      setIsPaddedTest(false);
      initEditor(rawStr);
      return;
    }
    initEditor(formatMode === 'JS' ? rawStr : JSONStr);
    setIsPaddedTest(false);
  }
  // 对生成的文件进行测试(含JS校验和JSON校验)
  async function handleTest() {
    setIsTesting(true);
    // 浏览器端lint性能较差，等待校验最后修改结果
    await sleep(1500);
    let errorCount = 0;
    const diags = view.state?.values?.filter((v: any) => v?.diagnostics);
    diags?.forEach((v: any) => {
      if (v?.selected) errorCount++;
    });
    if (errorCount) {
      setIsTesting(false);
      return notification.error({
        message: '未通过测试',
        description: '存在语法错误，请核查',
      });
    }
    const curCode = view.state.toJSON().doc;
    if (keyMode === 'WORD' && /请替换[0-9]*/g.test(curCode)) {
      setIsTesting(false);
      return notification.error({
        message: '未通过测试',
        description: `存在未能解析的KEY值(搜索"请替换"), 请手动填写, 并上报此案例`,
      });
    }
    const checkExportReg =
      /(export){1} +((const)|(let)|(var)){1} +(lang_((zh)|(ar)|(tr)|(ur)|(en))){1} *= *{{1}[^}]*}{1}/g;

    if (formatMode === 'JS' && curCode.match(checkExportReg).length !== 5) {
      setIsTesting(false);
      return notification.error({
        message: '未通过测试',
        description: `JS文件需要Export相应对象，请补充关键字`,
      });
    }
    autoTest(curCode, formatMode)
      .then(() => {
        setIsPaddedTest(true);
        setIsTesting(false);
        notification.success({
          message: '已通过测试',
          description: '可以执行推送操作',
        });
      })
      .catch((e: string) => {
        setIsPaddedTest(false);
        setIsTesting(false);
        notification.error({
          message: '未通过测试',
          description: e.toString(),
        });
      });
  }
  //  复制编辑器文本内容
  function handleCopy() {
    copy(view.state.toJSON().doc);
  }
  //  下载文件
  function handleDownload() {
    if (formatMode === 'JS') {
      exportJS(view.state.toJSON().doc);
    } else {
      exportJSON(view.state.toJSON().doc);
    }
  }

  // 初始化或设置更改时,重新格式化表格
  useEffect(() => {
    if (isLoadedSheet) {
      formatSheet();
    }
  }, [isLoadedSheet, formatMode, keyMode]);
  // 暴露格式化文档方法
  useImperativeHandle(
    refName,
    () => {
      return {
        formatSheet,
      };
    },
    [formatMode, keyMode],
  );
  return (
    <div className={styles.codeBox}>
      <div className={styles.code} id="code"></div>
      <div className={styles.status}>
        <Space size={8}>
          <Tooltip
            placement="bottomRight"
            title="切换KEY值命名模式, 单词模式书写时语义会更清晰, 但如果英文文案后期有修改, KEY值可能有变动"
          >
            <Switch
              checkedChildren="Words"
              unCheckedChildren="Index"
              defaultChecked
              onChange={() =>
                setKeyMode((pre) => (pre === 'WORD' ? 'INDEX' : 'WORD'))
              }
            />
          </Tooltip>
          <Tooltip placement="bottomRight" title="切换JS/JSON格式">
            <Switch
              checkedChildren="JS"
              unCheckedChildren="JSON"
              defaultChecked
              onChange={() =>
                setFormatMode((pre) => (pre === 'JS' ? 'JSON' : 'JS'))
              }
            />
          </Tooltip>
          <Tooltip placement="bottomRight" title="下载">
            <Button
              icon={<DownloadOutlined />}
              onClick={handleDownload}
            ></Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title="复制">
            <Button icon={<CopyOutlined />} onClick={handleCopy}></Button>
          </Tooltip>
          {!isPassedTest ? (
            <Tooltip placement="bottomRight" title="测试">
              <Button
                icon={isTesting ? <LoadingOutlined /> : <BugOutlined />}
                type="primary"
                onClick={handleTest}
                disabled={isTesting}
              >
                {/* {isTesting ? '测试中' : '测试'} */}
              </Button>
            </Tooltip>
          ) : (
            <></>
          )}
          <Tooltip
            placement="bottomRight"
            title={isPassedTest ? '提交该文件' : '提交该文件(需要先通过测试)'}
          >
            <Button
              type="primary"
              icon={<SaveOutlined />}
              disabled={!isPassedTest}
            >
              {/* 提交 */}
            </Button>
          </Tooltip>
        </Space>
      </div>
    </div>
  );
});
export default CodePreview;
