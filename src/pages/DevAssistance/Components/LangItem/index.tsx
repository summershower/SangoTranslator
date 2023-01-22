import { copy } from '@/utils/common';
import styles from './index.less';
const LangItem: React.FC<{
  keyName: string;
  zh: string;
  tr: string;
  en: string;
  UILang: 'TR' | 'EN';
  pageName: string;
  copyMode: 'TEMPLATE' | 'JS' | 'TEMPLATEJS';
  keywords?: string;
}> = ({ keyName, zh, tr, en, UILang, pageName, copyMode, keywords }) => {
  function handleCopy() {
    if (copyMode === 'TEMPLATE') {
      copy(`{{ $t('${pageName}.${keyName}') }}`);
    } else if (copyMode === 'JS') {
      copy(`t('${pageName}.${keyName}')`);
    } else if (copyMode === 'TEMPLATEJS') {
      copy(`$t('${pageName}.${keyName}')`);
    }
  }
  function replaceKeywords(str: string): string {
    let res = str;
    if (keywords) {
      res = str.replace(new RegExp(keywords, 'gi'), '<span>$&</span>');
    }
    return res;
  }
  return (
    <div className={styles.langItem} onClick={handleCopy}>
      <div className={styles.key}>
        {UILang === 'TR' ? replaceKeywords(tr) : replaceKeywords(en)}
      </div>
      <div className={styles.zh}>{replaceKeywords(zh)}</div>
    </div>
  );
};
export default LangItem;
