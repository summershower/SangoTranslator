import styles from './index.less';
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { format } from 'utils/format';
import { EditorView, basicSetup } from 'codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { solarizedLight } from 'cm6-theme-solarized-light';
import { Button, Space } from 'antd';
import { autoTest } from 'utils/autoTest';
import { CopyOutlined, SaveOutlined, BugOutlined } from '@ant-design/icons';
let view: EditorView;
const CodePreview = forwardRef<
  { formatSheet: (index?: string) => void },
  { isLoadedSheet: boolean }
>(({ isLoadedSheet }, refName) => {
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
      ],
      parent: document.querySelector('#code') as HTMLElement,
    });
  }

  function formatSheet(index?: string) {
    const rawStr = format(index);
    initEditor(rawStr);
  }
  function handleTest() {
    const curCode = view.state.toJSON().doc;
    autoTest(curCode);
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
          <Button icon={<BugOutlined />} onClick={handleTest}>
            测试
          </Button>
          <Button icon={<CopyOutlined />}>复制</Button>
          <Button type="primary" icon={<SaveOutlined />}>
            提交
          </Button>
        </Space>
      </div>
    </div>
  );
});
export default CodePreview;
