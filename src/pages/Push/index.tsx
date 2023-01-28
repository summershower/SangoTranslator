import styles from './index.less'
import { useEffect, useState } from 'react';
import { Space, Divider, Select, Button, Input } from 'antd'
import useLocalSheets from '@/hooks/useLocalSheets';

const Push: React.FC = () => {
  const sheets = useLocalSheets();
  const [currentSheetId, setCurrentSheetId] = useState('');
  useEffect(() => {
    sheets?.[0] && setCurrentSheetId(sheets[0].sheetId);
  }, [sheets])
  function handleChangeSheet() {

  }
  return (
    <div>
      <Space split={<Divider type="vertical" />}>
        <div>
          <span>选择工作表：</span>
          <Select
            defaultValue={currentSheetId}
            style={{ width: 200 }}
            onChange={handleChangeSheet}
            key={currentSheetId}
            options={sheets.map((v) => {
              return {
                value: v.sheetId,
                label: v.sheetName,
              };
            })}
          />
        </div>
      </Space>
      {/* 时间对比 */}
      <div className={styles.time}>
        <div className={styles.changeTime}>更改时间：</div>
        <div className={styles.uploadTime}>上传时间：</div>
      </div>
      <div className={styles.diff}>
        <div className={styles.local}>Local</div>
        <div className={styles.cloud}>Cloud</div>
      </div>
      {/* 上传按钮 */}
      <div className="btn">
        <Space >
        <span>推送路径:</span>
        <span>(每个工作表只能填写一次，一经确认将无法更改)</span>
          <Input size="large" placeholder="large size" />
          <Button type="primary" size='large'>
            推送云端
          </Button>
        </Space>
      </div>
    </div>
  );
};
export default Push;
