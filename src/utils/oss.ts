const OSS = require('ali-oss');
import { getOSSConfig } from '@/requests';

export async function initOSS() {
  const { data } = await getOSSConfig();
  const {
    aLiYunHost: region,
    accessKeyId,
    accessKeySecret,
    bucketName: bucket,
    securityToken: stsToken,
  } = data;
  return new OSS({
    region: region.replace('.aliyuncs.com', ''),
    accessKeyId,
    accessKeySecret,
    stsToken,
    bucket,
  });
}
