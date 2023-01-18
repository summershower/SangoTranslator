import { useEffect, useRef } from 'react';
import options from './options';
import { initDB, read } from 'utils/indexDB';
const NotEditableSheet: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // 表格容器DOM
  useEffect(() => {
    initDB()
      .then(() => {
        // 读取数据库内容，初始化表格
        const optionsCopy: any = { ...options };
        read().then((res) => {
          if (res) optionsCopy.data = res;
          window.luckysheet.create(optionsCopy);
        });
      })
      .catch(() => {
        // 数据库读取失败，使用空表格初始化
        window.luckysheet.create(options);
      });
  }, []);

  return (
    <div
      style={{ width: '50vw', height: '80vh' }}
      id="formatSheetContainer"
      ref={containerRef}
    ></div>
  );
};
export default NotEditableSheet;
