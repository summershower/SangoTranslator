import { request } from '@umijs/max';
import type { OSSConfig } from '@/Types';
// 获取OSS配置
export const getOSSConfig = () => {
  return request<{
    code: number;
    data: OSSConfig;
  }>('/gapi/getSTS?objectName=web', {
    method: 'GET',
  });
};
