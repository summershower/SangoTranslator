import { Select, Space, Divider, Radio, Input, RadioChangeEvent } from 'antd';
import { useState, useEffect, useDeferredValue, useRef } from 'react';
import LangItem from './Components/LangItem';
import styles from './index.less';
// import { readFile, initDB } from '@/utils/indexDB';
// import type { SheetFileData } from '../../Types/db';
import type { LangObject } from '../../Types';
import { JSToObject } from '@/utils/common';
import useNoPadding from '@/hooks/useNoPadding';
import useLocalSheets from '@/hooks/useLocalSheets';
const { Search } = Input;
const Dev: React.FC = () => {
  // const [sheets, setSheets] = useState<SheetFileData[]>([]);
  const [currentSheetId, setCurrentSheetId] = useState('');
  const [langObj, setLangObj] = useState<LangObject>();
  const [keywords, setKeywords] = useState('');
  const [copyMode, setCopyMode] = useState<'TEMPLATE' | 'JS' | 'TEMPLATEJS'>(
    'TEMPLATE',
  );
  const [UILang, setUILang] = useState<'TR' | 'EN'>('TR');
  const deferredLangObj = useDeferredValue(langObj);
  const searchRef = useRef(null);
  useNoPadding();
  const sheets = useLocalSheets();

  function getLangs() {
    const targetSheet = sheets.find((v) => v.sheetId === currentSheetId);
    if (targetSheet?.json) {
      setLangObj(JSON.parse(targetSheet.json));
    } else if (targetSheet?.js) {
      JSToObject(targetSheet.js).then((res: LangObject) => {
        console.log(res, '???');
        setLangObj(res);
      });
    }
  }
  useEffect(() => {
    sheets?.[0] && setCurrentSheetId(sheets[0].sheetId);
  }, [sheets])
  useEffect(() => {
    getLangs();
  }, [currentSheetId]);
  function handleChangeSheet(v: string) {
    setCurrentSheetId(v);
  }
  function handleChangeCopyMode(e: RadioChangeEvent) {
    setCopyMode(e.target.value);
    setKeywords('');
  }
  function handleChangeUILang(v: 'TR' | 'EN') {
    setUILang(v);
    setKeywords('');
  }
  const copyModes = [
    { label: '模板', value: 'TEMPLATE' },
    // { label: '模板JS', value: 'TEMPLATEJS' },
    { label: 'JS', value: 'JS' },
  ];

  function handleInputKeywords(e: any) {
    setKeywords(e.target.value.trim());
  }
  return (
    <div className={styles.container}>
      {/* 状态栏 */}
      <div className={styles.status}>
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

          <div>
            <span>UI语言：</span>
            <Select
              defaultValue="TR"
              style={{ width: 80 }}
              onChange={handleChangeUILang}
              options={[
                { value: 'TR', label: 'TR' },
                { value: 'EN', label: 'EN' },
              ]}
            />
          </div>
          <div>
            <span>模式：</span>
            <Radio.Group
              buttonStyle="solid"
              optionType="button"
              options={copyModes}
              value={copyMode}
              onChange={handleChangeCopyMode}
            ></Radio.Group>
          </div>
        </Space>
        {/* 搜索框 */}
        <div className={styles.search}>
          <Search
            placeholder={`输入${UILang}/ZH进行检索`}
            allowClear
            onChange={handleInputKeywords}
            enterButton
            key={UILang + copyMode}
            ref={searchRef}
            style={{ width: 500 }}
          />
        </div>
      </div>
      {/* 翻译详情 */}
      <div className={styles.langs}>
        {Object.keys(deferredLangObj?.en || {})
          .filter((key) => {
            // 筛选选中的内容
            return (
              deferredLangObj?.['zh']?.[key]?.includes(keywords) ||
              deferredLangObj?.[UILang.toLocaleLowerCase() as 'en' | 'tr']?.[
                key
              ]?.includes(keywords)
            );
          })
          .map((key) => {
            return (
              <LangItem
                keyName={key}
                zh={deferredLangObj?.['zh']?.[key] || ''}
                en={deferredLangObj?.['en']?.[key] || ''}
                tr={deferredLangObj?.['tr']?.[key] || ''}
                UILang={UILang}
                copyMode={copyMode}
                key={key}
                pageName={
                  sheets.find((v) => v.sheetId === currentSheetId)?.sheetName ||
                  ''
                }
                keywords={keywords}
              ></LangItem>
            );
          })}
      </div>
    </div>
  );
};
export default Dev;
