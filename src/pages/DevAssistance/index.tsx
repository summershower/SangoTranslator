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
import { saveSheetSettings, readSheetSettings } from '@/utils/storage';
const { Search } = Input;
const Dev: React.FC = () => {
  // const [sheets, setSheets] = useState<SheetFileData[]>([]);
  const [currentSheetId, setCurrentSheetId] = useState('');
  const [langObj, setLangObj] = useState<LangObject>();
  const [keywords, setKeywords] = useState('');
  const [copyMode, setCopyMode] = useState<'TEMPLATE' | 'JS' | 'TEMPLATEJS'>(
    'TEMPLATE',
  );
  const [UILang, setUILang] = useState<'TR' | 'EN' | 'IN'>('TR');
  const [prefix, setPrefix] = useState('');
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
        setLangObj(res);
      });
    }
  }
  function handleInputPrefix(e) {
    setPrefix(e.target.value.trim());
    saveSheetSettings(currentSheetId, 'prefix', e.target.value.trim());
  }
  useEffect(() => {
    if (sheets?.[0]) {
      setCurrentSheetId(sheets[0].sheetId);
    }
  }, [sheets]);
  useEffect(() => {
    getLangs();
    setPrefix(
      readSheetSettings(currentSheetId, 'prefix') ||
        sheets?.find((v) => v.sheetId === currentSheetId)?.sheetName ||
        '',
    );
    setUILang(readSheetSettings(currentSheetId, 'UILang') || 'TR');
  }, [currentSheetId]);
  function handleChangeSheet(v: string) {
    setCurrentSheetId(v);
  }
  function handleChangeCopyMode(e: RadioChangeEvent) {
    setCopyMode(e.target.value);
    // setKeywords('');
  }
  function handleChangeUILang(v: 'TR' | 'EN' | 'IN') {
    setUILang(v);
    setKeywords('');
    saveSheetSettings(currentSheetId, 'UILang', v);
  }
  const copyModes = [
    { label: '??????', value: 'TEMPLATE' },
    { label: 'JS', value: 'JS' },
    { label: '??????JS', value: 'TEMPLATEJS' },
  ];

  function handleInputKeywords(e: any) {
    setKeywords(e.target.value.trim());
  }
  return (
    <div className={styles.container}>
      {/* ????????? */}
      <div className={styles.status}>
        <Space split={<Divider type="vertical" />}>
          <div>
            <span>??????????????????</span>
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

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '45px' }}>??????: </span>
            <Input value={prefix} onChange={handleInputPrefix} />
          </div>

          <div>
            <span>UI??????: </span>
            <Select
              value={UILang}
              style={{ width: 60 }}
              onChange={handleChangeUILang}
              options={[
                { value: 'TR', label: 'TR' },
                { value: 'EN', label: 'EN' },
                { value: 'IN', label: 'IN' },
              ]}
            />
          </div>
          <div>
            <span>?????????</span>
            <Radio.Group
              buttonStyle="solid"
              optionType="button"
              options={copyModes}
              value={copyMode}
              onChange={handleChangeCopyMode}
            ></Radio.Group>
          </div>
        </Space>
        {/* ????????? */}
        <div className={styles.search}>
          <Search
            placeholder={`??????${UILang}/ZH????????????`}
            key={UILang}
            allowClear
            onChange={handleInputKeywords}
            enterButton
            ref={searchRef}
            style={{ width: 500 }}
          />
        </div>
      </div>
      {/* ???????????? */}
      <div className={styles.langs}>
        {Object.keys(deferredLangObj?.en || {})
          .filter((key) => {
            // ?????????????????????
            return (
              deferredLangObj?.['zh']?.[key]
                ?.toLowerCase()
                ?.includes(keywords.toLowerCase()) ||
              deferredLangObj?.[UILang.toLowerCase() as 'en' | 'tr' | 'in']?.[
                key
              ]
                ?.toLowerCase()
                ?.includes(keywords.toLowerCase())
            );
          })
          .map((key) => {
            return (
              <LangItem
                keyName={key}
                zh={deferredLangObj?.['zh']?.[key] || ''}
                en={deferredLangObj?.['en']?.[key] || ''}
                tr={deferredLangObj?.['tr']?.[key] || ''}
                ind={deferredLangObj?.['in']?.[key] || ''}
                UILang={UILang}
                copyMode={copyMode}
                key={key}
                pageName={prefix || ''}
                keywords={keywords}
              ></LangItem>
            );
          })}
      </div>
    </div>
  );
};
export default Dev;
