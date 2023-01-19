import { useEffect, useRef } from 'react';
// import { usePrevious } from 'ahooks';
import options from './options';
import { initDB, read } from 'utils/indexDB';
const Sheet: React.FC = () => {
  // const [width, setWidth] = useState(0); // 表格容器宽度
  // const [headerHeight, setHeaderHeight] = useState(0); // 表格头高度
  const containerRef = useRef<HTMLDivElement | null>(null); // 表格容器DOM

  function initSheet() {
    // 初始化indexDB仓库
    initDB()
      .then(() => {
        // 读取数据库内容，初始化表格
        const optionsCopy = { ...options };
        console.log(optionsCopy);
        read().then((res) => {
          if (res) optionsCopy.data = res;
          window.luckysheet.create(optionsCopy);
        });
      })
      .catch(() => {
        // 数据库读取失败，使用空表格初始化
        window.luckysheet.create(options);
      });
  }
  useEffect(() => {
    // 监听页面尺寸变化
    // const timer = setInterval(() => {
    //   const width = containerRef.current?.offsetWidth;
    //   const height =
    //     document.querySelector('.ant-layout-header')?.offsetHeight || 0;
    //   if (width) setWidth(width);
    //   setHeaderHeight(height);
    // }, 300);
    // 清除antd默认padding
    const layout = document.querySelector('.ant-pro-layout-content');
    layout?.classList.add('noPadding');
    initSheet();
    return () => {
      // clearInterval(timer);
      layout?.classList.remove('noPadding');
    };
  }, []);

  // const previousWidth = usePrevious(width);
  // const previousHeight = usePrevious(headerHeight);
  // 表格容器尺寸改变，重新渲染表格
  // useEffect(() => {
  //   if (
  //     (previousWidth && previousWidth !== width) ||
  //     (previousHeight !== undefined && previousHeight !== headerHeight)
  //   ) {
  //     initSheet();
  //   }
  // }, [width, headerHeight]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
      }}
      id="sheetContainer"
      ref={containerRef}
    ></div>
  );
};
export default Sheet;
