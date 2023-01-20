import styles from './index.less';
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { format } from 'utils/format';
import { EditorView, basicSetup } from 'codemirror';
import { javascript, esLint } from '@codemirror/lang-javascript';
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
  const [isPassedTest, setIsPaddedTest] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const [formatMode, setFormatMode] = useState('JS');

  // 初始化编辑器
  function initEditor(content: string) {
    if (view) {
      view.destroy();
    }
    const extendsArr = [
      basicSetup,
      javascript(),
      EditorView.lineWrapping,
      solarizedLight,
      EditorView.inputHandler.of(() => {
        setIsPaddedTest(false);
        return false;
      }),
      linter(
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
      ),
    ];
    if (formatMode === 'JSON') extendsArr.pop();
    view = new EditorView({
      doc: content,
      extensions: extendsArr,
      parent: document.querySelector('#code') as HTMLElement,
    });
  }
  // 格式化表格内容
  function formatSheet(index?: string) {
    const [rawStr, JSONStr] = format(index);
    if (rawStr.length && !JSONStr) {
      notification.error({
        message: 'JSON文件转换失败',
        description: '请检查JS文件是否有语法错误',
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
    if (formatMode === 'JS') {
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
    }
    const curCode = view.state.toJSON().doc;
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

  useEffect(() => {
    // 读取luckysheet数据
    if (isLoadedSheet) {
      formatSheet();
    }
  }, [isLoadedSheet, formatMode]);
  // 暴露格式化文档方法
  useImperativeHandle(
    refName,
    () => {
      return {
        formatSheet,
      };
    },
    [],
  );
  return (
    <div className={styles.codeBox}>
      <div className={styles.code} id="code"></div>
      <div className={styles.status}>
        <Space size={8}>
          <Tooltip placement="bottomRight" title="切换JS/JSON">
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
