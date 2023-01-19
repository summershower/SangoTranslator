import { useEffect, useRef } from 'react';
import options from './options';
import { initDB, read } from 'utils/indexDB';
const NotEditableSheet: React.FC<{
  setIsLoadedSheet: (status: boolean) => void;
  formatSheet: (index?: string) => void;
}> = ({ setIsLoadedSheet, formatSheet }) => {
  const containerRef = useRef<HTMLDivElement | null>(null); // 表格容器DOM
  const hook = {
    // 切换表格钩子函数，触发重新格式化代码操作
    sheetActivate(index: string) {
      formatSheet(index);
    },
  };
  useEffect(() => {
    initDB()
      .then(() => {
        // 读取数据库内容，初始化表格
        const optionsCopy: any = { ...options, hook };
        read().then((res) => {
          if (res) {
            optionsCopy.data = res;
          }
          window.luckysheet.create(optionsCopy);
          setIsLoadedSheet(true);
        });
      })
      .catch(() => {
        alert('failed');
      });
  }, []);

  return (
    <div
      style={{ flex: '1', height: '100%' }}
      id="formatSheetContainer"
      ref={containerRef}
    ></div>
  );
};
export default NotEditableSheet;
