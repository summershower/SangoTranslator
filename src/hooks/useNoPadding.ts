import { useEffect } from 'react';
export default () => {
  useEffect(() => {
    // 清除antd默认padding
    const layout = document.querySelector('.ant-pro-layout-content');
    layout?.classList.add('noPadding');
    return () => {
      layout?.classList.remove('noPadding');
    };
  }, []);
};
