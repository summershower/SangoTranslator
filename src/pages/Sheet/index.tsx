import { Workbook } from '@fortune-sheet/react';
import '@fortune-sheet/react/dist/index.css';
import styles from './index.less';
import { useEffect, useState, useRef } from 'react';
import { usePrevious } from 'ahooks';
import { flushSync } from 'react-dom';

const Sheet: React.FC = () => {
  const [width, setWidth] = useState(0); // 表格容器宽度
  const [headerHeight, setHeaderHeight] = useState(0); // 表格头高度
  const [refreshFlag, setRefreshFlag] = useState(true); // 用于触发刷新的标记
  const containerRef = useRef<HTMLDivElement | null>(null); // 表格容器DOM
  useEffect(() => {
    // 监听页面尺寸变化
    const timer = setInterval(() => {
      const width = containerRef.current?.offsetWidth;
      const height =
        document.querySelector('.ant-layout-header')?.offsetHeight || 0;
      if (width) setWidth(width);
      setHeaderHeight(height);
    }, 300);
    // 阻止表格容器右键点击事件
    containerRef.current?.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    return () => clearInterval(timer);
  }, []);

  const previousWidth = usePrevious(width);
  const previousHeight = usePrevious(headerHeight);
  // 表格容器尺寸改变，重新渲染表格
  useEffect(() => {
    console.log(previousHeight);
    if (
      (previousWidth && previousWidth !== width) ||
      previousHeight !== headerHeight
    ) {
      setRefreshFlag(false);
      flushSync(() => {
        setTimeout(() => {
          setRefreshFlag(true);
        }, 0);
      });
    }
  }, [width, headerHeight]);
  return (
    <div
      className={styles.container}
      style={{ height: !headerHeight ? '100vh' : 'calc(100vh - 56px)' }}
      ref={containerRef}
    >
      {refreshFlag ? <Workbook data={[{ name: 'Sheet1' }]}></Workbook> : <></>}
    </div>
  );
};
export default Sheet;
