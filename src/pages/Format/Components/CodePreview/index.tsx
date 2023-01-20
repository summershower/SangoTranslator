import styles from './index.less';
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { format } from 'utils/format';
import { EditorView, basicSetup } from 'codemirror';
import { javascript, esLint } from '@codemirror/lang-javascript';
import { solarizedLight } from 'cm6-theme-solarized-light';
import { linter } from '@codemirror/lint';
import * as eslint from 'eslint-linter-browserify';
import { Button, Space, notification } from 'antd';
import { autoTest } from 'utils/autoTest';
import {
  CopyOutlined,
  SaveOutlined,
  BugOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { copy, sleep } from 'utils/common';
import { useState } from 'react';
let view: EditorView;
const CodePreview = forwardRef<
  { formatSheet: (index?: string) => void },
  { isLoadedSheet: boolean }
>(({ isLoadedSheet }, refName) => {
  const [isPassedTest, setIsPaddedTest] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  // 代码诊断拓展
  // 初始化编辑器
  function initEditor(content: string) {
    if (view) {
      view.destroy();
    }
    view = new EditorView({
      doc: content,
      extensions: [
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
      ],
      parent: document.querySelector('#code') as HTMLElement,
    });
  }
  // 格式化表格内容
  function formatSheet(index?: string) {
    const rawStr = format(index);
    initEditor(rawStr);
    setIsPaddedTest(false);
  }
  // 进行生成的JS文件的测试
  async function handleTest() {
    setIsTesting(true);
    // 浏览器端lint性能较差，等待校验最后修改结果
    await sleep(1500);
    let errorCount = 0;
    const diags = view.state?.values.filter((v) => v?.diagnostics);
    diags.forEach((v) => {
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
    autoTest(curCode)
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

  useEffect(() => {
    // 读取luckysheet数据
    if (isLoadedSheet) {
      formatSheet();
    }
  }, [isLoadedSheet]);
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
          <Button icon={<CopyOutlined />} onClick={handleCopy}>
            复制
          </Button>
          {!isPassedTest ? (
            <Button
              icon={isTesting ? <LoadingOutlined /> : <BugOutlined />}
              onClick={handleTest}
              disabled={isTesting}
            >
              {isTesting ? '测试中' : '测试'}
            </Button>
          ) : (
            <></>
          )}
          <Button
            type="primary"
            icon={<SaveOutlined />}
            disabled={!isPassedTest}
          >
            提交
          </Button>
        </Space>
      </div>
    </div>
  );
});
export default CodePreview;
