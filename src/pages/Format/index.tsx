import NotEditableSheet from './Components/NotEditableSheet';
import CodePreview from './Components/CodePreview';
import styles from './index.less';
const Format: React.FC = () => {
  return (
    <div className={styles.container}>
      <NotEditableSheet />
      <CodePreview />
    </div>
  );
};
export default Format;
