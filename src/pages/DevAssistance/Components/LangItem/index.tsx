import { copy } from '@/utils/common';
import { useEffect, useRef } from 'react';
import styles from './index.less';
const LangItem: React.FC<{
  keyName: string;
  zh: string;
  tr: string;
  en: string;
  ind?: string;
  UILang: 'TR' | 'EN' | 'IN';
  pageName: string;
  copyMode: 'TEMPLATE' | 'JS' | 'TEMPLATEJS';
  keywords?: string;
}> = ({
  keyName,
  zh,
  tr,
  en,
  ind,
  UILang,
  pageName,
  copyMode,
  keywords = '',
}) => {
  function handleCopy() {
    // 占位符检测
    const placeholderReg = /(?<={)[^{}]*(?=})/g;
    let placeholderStr = '{';
    const placeholderMatches = en.match(placeholderReg);
    if (placeholderMatches) {
      placeholderMatches.forEach((v, i) => {
        placeholderStr += ` ${v}: 0`;
        if (i < placeholderMatches.length - 1) {
          placeholderStr += `,`;
        }
        if (i === placeholderMatches.length - 1) {
          placeholderStr += ` }`;
        }
      });
    }
    if (copyMode === 'TEMPLATE') {
      if (placeholderMatches) {
        copy(`{{ $t('${pageName}.${keyName}', ${placeholderStr}) }}`);
      } else {
        copy(`{{ $t('${pageName}.${keyName}') }}`);
      }
    } else if (copyMode === 'JS') {
      if (placeholderMatches) {
        copy(`t('${pageName}.${keyName}', ${placeholderStr})`);
      } else {
        copy(`t('${pageName}.${keyName}')`);
      }
    } else if (copyMode === 'TEMPLATEJS') {
      if (placeholderMatches) {
        copy(`$t('${pageName}.${keyName}', ${placeholderStr})`);
      } else {
        copy(`$t('${pageName}.${keyName}')`);
      }
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
        {UILang === 'TR' ? tr : UILang === 'EN' ? en : ind}
      </div>
      <div className={styles.zh} ref={zhRef}>
        {zh}
      </div>
    </div>
  );
};
export default LangItem;
