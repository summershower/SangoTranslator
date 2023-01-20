import NotEditableSheet from './Components/NotEditableSheet';
import CodePreview from './Components/CodePreview';
import styles from './index.less';
import { useState, useRef, useEffect } from 'react';
const Format: React.FC = () => {
  const [isLoadedSheet, setIsLoadedSheet] = useState(false);
  const codeRef = useRef<{ formatSheet: (index: string) => void }>(null);
  function formatSheet(index?: string) {
    codeRef.current?.formatSheet(index ?? '');
  }
  useEffect(() => {
    // 清除antd默认padding
    const layout = document.querySelector('.ant-pro-layout-content');
    layout?.classList.add('noPadding');
    return () => {
      layout?.classList.remove('noPadding');
    };
  }, []);
  return (
    <div className={styles.container}>
      <NotEditableSheet
        setIsLoadedSheet={setIsLoadedSheet}
        formatSheet={formatSheet}
      />
      <CodePreview isLoadedSheet={isLoadedSheet} ref={codeRef} />
    </div>
  );
};
export default Format;
