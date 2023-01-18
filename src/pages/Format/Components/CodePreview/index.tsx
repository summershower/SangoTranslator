import styles from './index.less';
import { useEffect } from 'react';
const CodePreview: React.FC = () => {
  useEffect(() => {
    // 读取luckysheet数据
  }, []);
  return <div className={styles.code}></div>;
};
export default CodePreview;
