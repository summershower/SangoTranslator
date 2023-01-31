import { request } from '@umijs/max';
import type { OSSConfig } from '@/Types';
// 获取OSS配置
export const getOSSConfig = () => {
  return request<{
    code: number;
    data: OSSConfig;
  }>('https://gapi.meiqijiacheng.com/configure/getSTS?objectName=web', {
    method: 'GET',
  });
};
