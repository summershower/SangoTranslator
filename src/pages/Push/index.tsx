import styles from './index.less';
import { useEffect, useState } from 'react';
import { Space, Select, Button, Input, notification, message } from 'antd';
import useLocalSheets from '@/hooks/useLocalSheets';
import { initOSS } from '@/utils/oss';
import * as Diff from 'diff';
import { readCloudFiles, saveCloudFile } from '@/utils/storage';
import { request } from '@umijs/max';
import useNoPadding from '@/hooks/useNoPadding';
import dayjs from '@/utils/dayjs';
import { copy } from '@/utils/common';
import type { CloudFile } from '@/Types';

const Push: React.FC = () => {
  const sheets = useLocalSheets();
  useNoPadding();
  const [currentSheetId, setCurrentSheetId] = useState(''); // 当前选中的工作表ID
  const [uploadDirectory, setUploadDirectory] = useState(''); // 上传目录
  const [isUploading, setIsUploading] = useState(false); // 是否正在上传
  const [currentSheetCloudInfo, setCurrentSheetCloudInfo] =
    useState<CloudFile>(null); // 当前工作表云端信息

  // 对比内容
  async function diffCode(oldCode = '') {
    const currentSheet = sheets.find((v) => v.sheetId === currentSheetId);
    if (!currentSheet) return;
    const code = currentSheet?.js || currentSheet?.json || '';
    const title = currentSheet.sheetName;
    const diffString = Diff.createTwoFilesPatch(title, title, oldCode, code);
    const targetElement = document.querySelector('#diffBox');
    const configuration = {
      drawFileList: false,
      fileListToggle: false,
      fileListStartVisible: false,
      fileContentToggle: false,
      stickyFileHeaders: false,
      matching: 'lines',
      outputFormat: 'side-by-side',
      renderNothingWhenEmpty: true,
    };
    const diff2htmlUi = new window.Diff2HtmlUI(
      targetElement,
      diffString,
      configuration,
    );
    diff2htmlUi.draw();
  }
  // 获取当前工作表云端信息
  async function getCurrentSheetCloudInfo() {
    const cloudFile = readCloudFiles()?.find(
      (v) => v?.sheetId === currentSheetId,
    );
    if (cloudFile) {
      message.open({
        type: 'loading',
        content: '读取云端文件中...',
        duration: 0,
      });
      setCurrentSheetCloudInfo(cloudFile);
      const code: string = await request(cloudFile.url);
      message.destroy();
      diffCode(code);
    } else {
      setCurrentSheetCloudInfo(null);
      diffCode();
    }
  }

  useEffect(() => {
    if (sheets?.[0]) {
      setCurrentSheetId(sheets[0].sheetId);
    }
  }, [sheets]);
  useEffect(() => {
    getCurrentSheetCloudInfo();
  }, [currentSheetId]);
  function handleChangeSheet(v) {
    setCurrentSheetId(v);
  }
  async function handleUpload() {
    if (!uploadDirectory && !currentSheetCloudInfo) {
      return notification.error({
        message: '请输入推送路径',
      });
    }
    try {
      setIsUploading(true);
      message.open({
        type: 'loading',
        content: '上传中...',
        duration: 0,
      });
      const currentSheet = sheets.find((v) => v.sheetId === currentSheetId);
      const code = currentSheet?.js || currentSheet?.json;
      const file = new Blob([code as string], {
        type: `text/${currentSheet?.js ? 'javascript' : 'json'}`,
      });
      const oss = await initOSS();
      const directoryMatchRef =
        /(?<=sango-frankfurt.oss-accelerate.aliyuncs.com\/web\/).+(?=\/)/gi;
      const directory = currentSheetCloudInfo?.url
        ? currentSheetCloudInfo.url.match(directoryMatchRef)?.[0]
        : uploadDirectory.trim();
      const { url } = await oss.put(
        `/web/test/langTest/${directory}/lang.${
          currentSheet?.js ? 'js' : 'json'
        }`,
        file,
      );
      saveCloudFile({
        url: url,
        modifyTime: +new Date(),
        sheetId: currentSheetId,
      });
      notification.success({
        message: '推送成功',
      });
      setIsUploading(false);
      getCurrentSheetCloudInfo();
      message.destroy();
    } catch (e) {
      notification.error({
        message: String(e),
      });
    }
  }

  function handleInput(e) {
    setUploadDirectory(e.target.value);
  }

  function handleUrl() {
    copy(currentSheetCloudInfo?.url || '');
  }

  function formatTime(timestamp: number, isCloud = false): string {
    if (!timestamp) return '';
    return (
      `${isCloud ? '上传' : '修改'}时间：` +
      dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss') +
      '(' +
      dayjs(timestamp).fromNow() +
      ')' +
      (isCloud && currentSheetCloudInfo
        ? ''
        : ' (相对于云端: ' +
          dayjs(timestamp).from(currentSheetCloudInfo.modifyTime) +
          ')')
    );
  }

  return (
    <div>
      <div className={styles.topBar}>
        <Space align="end" size="large">
          {/* 工作表选择框 */}
          <div>
            <span>选择工作表：</span>
            <Select
              defaultValue={currentSheetId}
              key={currentSheetId}
              style={{ width: 200 }}
              onChange={handleChangeSheet}
              options={sheets.map((v) => {
                return {
                  value: v.sheetId,
                  label: v.sheetName,
                };
              })}
            />
          </div>
          {/* 路径 */}
          {!currentSheetCloudInfo ? (
            <div className={styles.path}>
              <span>推送路径:</span>
              <Input
                placeholder="输入OSS目录名(建议驼峰命名)"
                style={{ width: '300px' }}
                onChange={handleInput}
              />
            </div>
          ) : (
            <div className={styles.url} onClick={handleUrl}>
              文件路径: {currentSheetCloudInfo?.url}
            </div>
          )}
          {/* 上传按钮 */}
          <div className={styles.upload}>
            <Button
              type="primary"
              onClick={handleUpload}
              disabled={isUploading}
            >
              推送云端
            </Button>
          </div>
        </Space>
        {/* 上传历史 */}
        <div className={styles.history}>
          {currentSheetCloudInfo ? (
            <div className={styles.time}>
              <span>
                {formatTime(
                  sheets?.find((v) => v.sheetId === currentSheetId)?.time || 0,
                )}
              </span>
              <span>{formatTime(currentSheetCloudInfo?.modifyTime, true)}</span>
            </div>
          ) : (
            '该工作表为初次推送，请指定推送路径(每个工作表只能填写一次，一经确认将无法更改)'
          )}
        </div>
      </div>
      <div className={styles.diff}>
        <div className={styles.empty}>暂存文档与云端对比没有变化。</div>
        <div id="diffBox" className={styles.diffBox}></div>
      </div>
    </div>
  );
};
export default Push;
