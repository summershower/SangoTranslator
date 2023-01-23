import { copy } from '@/utils/common';
import { useEffect, memo, useRef } from 'react';
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
}> = memo(
  ({ keyName, zh, tr, en, UILang, pageName, copyMode, keywords = '' }) => {
    function handleCopy() {
      if (copyMode === 'TEMPLATE') {
        copy(`{{ $t('${pageName}.${keyName}') }}`);
      } else if (copyMode === 'JS') {
        copy(`t('${pageName}.${keyName}')`);
      } else if (copyMode === 'TEMPLATEJS') {
        copy(`$t('${pageName}.${keyName}')`);
      }
    }
    const langRef = useRef<HTMLDivElement>(null);
    const zhRef = useRef<HTMLDivElement>(null);

    function highlight(dom: HTMLDivElement) {
      const html = (dom.textContent as string).replace(
        new RegExp(keywords, 'gi'),
        `<span style='color: orange'>$&</span>`,
      );
      dom.innerHTML = html;
    }
    useEffect(() => {
      highlight(langRef.current as HTMLDivElement);
      highlight(zhRef.current as HTMLDivElement);
    }, [keywords]);
    return (
      <div className={styles.langItem} onClick={handleCopy}>
        <div className={styles.key} ref={langRef}>
          {UILang === 'TR' ? tr : en}
        </div>
        <div className={styles.zh} ref={zhRef}>
          {zh}
        </div>
      </div>
    );
  },
  (pre, cur) => {
    return pre.copyMode !== cur.copyMode;
  },
);
export default LangItem;
