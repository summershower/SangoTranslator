import { frontEndJsTemplate } from './codeTemplate';
import { isTr, isUr, isAr, isZh, isEn } from '@/utils/regMatch';
import JSBeautify from 'js-beautify';
// 格式化表格数据
export function format(params: {
  sheetId?: string;
  keyMode: 'WORD' | 'INDEX';
}): [string, string] {
  const JSONObject: { [key: string]: Record<string, string> } = {
    zh: {},
    en: {},
    ar: {},
    ur: {},
    tr: {},
  }; // JSON模式使用对象进行存储
  let rawStr = frontEndJsTemplate; // JS模式使用模板进行替换

  // 获取目标工作簿
  let currentActiveSheet;
  if (params?.sheetId) {
    currentActiveSheet = window.luckysheet.getSheet({
      index: params.sheetId,
    }).data;
  } else {
    currentActiveSheet = window.luckysheet.getSheetData();
  }
  // 去除表格空行
  for (let i = currentActiveSheet.length - 1; i >= 0; i--) {
    let nullCount = 0;
    for (let k = 0; k < currentActiveSheet[i].length; k++) {
      if (
        currentActiveSheet[i][k] === null ||
        (!currentActiveSheet[i][k].v &&
          !currentActiveSheet[i][k]?.ct?.[0]?.s?.v)
      )
        nullCount++;
    }
    if (nullCount === currentActiveSheet[i].length) {
      currentActiveSheet.splice(i, 1);
    }
  }
  if (!currentActiveSheet?.[0]?.length) {
    return ['', ''];
  }
  // 获取表格所有列的数据
  const columns = new Array(currentActiveSheet[0].length); // 每一列的内容
  const columnsWordsStatistics = new Array(currentActiveSheet[0].length).fill(
    0,
  ); // 各列有效单元格的数量

  // 判断各列语言出现数量,出现最多的列被判定为该语种翻译
  const languageColumnIndex: Record<string, null | number> = {
    ar: null,
    ur: null,
    zh: null,
    en: null,
    tr: null,
  }; // 各语言对应列的index
  const languageNumberStatistics: Record<string, number>[] = new Array(
    columns.length,
  ); // 各列单元格语言出现数字统计
  for (let i = 0; i < languageNumberStatistics.length; i++) {
    languageNumberStatistics[i] = { ar: 0, tr: 0, ur: 0, zh: 0, en: 0 };
  }

  for (let i = 0; i < columns.length; i++) {
    columns[i] = [];
  }
  for (let row = 0; row < currentActiveSheet.length; row++) {
    for (let column = 0; column < currentActiveSheet[row].length; column++) {
      let value =
        currentActiveSheet[row][column]?.v ||
        currentActiveSheet[row][column]?.ct?.s?.[0]?.v;
      // console.log(currentActiveSheet[row][column]);
      if (value) {
        value = value.trim();
        columns[column].push(value);
        columnsWordsStatistics[column]++;
        // 正则判断该单元格语言类型
        if (isTr(value)) languageNumberStatistics[column]['tr']++;
        else if (isUr(value)) languageNumberStatistics[column]['ur']++;
        else if (isAr(value)) languageNumberStatistics[column]['ar']++;
        else if (isZh(value)) languageNumberStatistics[column]['zh']++;
        else if (isEn(value) && value !== '')
          languageNumberStatistics[column]['en']++;
      } else {
        columns[column].push('');
      }
    }
  }
  // 如果某一列数据少于总数量的50%,判定为无效列,从数组去除
  const maxAvailableWords = Math.max.apply(null, columnsWordsStatistics); // 最大有效文本列数
  // 移除无效列
  for (let i = columnsWordsStatistics.length - 1; i >= 0; i--) {
    if (columnsWordsStatistics[i] < maxAvailableWords / 2) {
      columns.splice(i, 1);
      languageNumberStatistics.splice(i, 1);
    }
  }
  // 判断各列对应语言
  for (let i = 0; i < languageNumberStatistics.length; i++) {
    let lang = 'en',
      maxCount = 0;
    Object.entries(languageNumberStatistics[i]).forEach(([key, value]) => {
      if (value > maxCount) {
        maxCount = value;
        lang = key;
      }
    });
    languageColumnIndex[lang] = i;
  }
  const result: Record<string, string[]> = {};
  Object.keys(languageColumnIndex).forEach((lang) => {
    if (languageColumnIndex[lang] !== undefined) {
      result[lang] = columns[languageColumnIndex[lang] as number];
    }
  });
  // console.log(result, languageNumberStatistics);
  // 使用英语列生成Key值
  const key = new Array(maxAvailableWords).fill('请替换');
  let enStr = ``;
  if (result['en']) {
    result['en'].forEach((v, i) => {
      const wordsArr = v
        .replaceAll('-', 'To')
        .replaceAll("'", '')
        .replace(/[^a-zA-Z0-9 ]/g, ' ')
        .trim()
        .split(' ');
      let currentKey = '';
      if (params.keyMode === 'WORD') {
        for (let i = 0; i < Math.min(6, wordsArr.length); i++) {
          // 禁止数字开头，禁止无意义空格
          if (
            !wordsArr[i] ||
            wordsArr[i] === ' ' ||
            (!currentKey.length && /^[0-9]+$/.test(wordsArr[i]))
          )
            continue;
          // 禁止时间数字连体
          if (
            /^[0-9]+$/.test(wordsArr[i]) &&
            (wordsArr[i].length > 5 ||
              /[0-9]/.test(currentKey[currentKey.length - 1]))
          )
            continue;
          // 去除多余介词和无意义尾词+限制Key值长度
          if (
            ([
              'the',
              'if',
              'to',
              'of',
              'on',
              'for',
              'has',
              'have',
              'can',
              'could',
              'in',
              'xxx',
              'xx',
              'x',
              'into',
              'is',
              'n',
              'a',
            ].includes(wordsArr[i].toLowerCase()) &&
              (currentKey.length + (wordsArr?.[i + 1]?.length || 0) > 21 ||
                i === Math.min(6, wordsArr.length) - 1)) ||
            currentKey.length > 21
          ) {
            break;
          }
          // 首字母大写
          currentKey += (
            wordsArr[i].slice(0, 1).toUpperCase() + wordsArr[i].slice(1)
          ).trim();
        }
        // 判断KEY是否重复
        let repeatNum = 0;
        for (let i = 0; i < key.length; i++) {
          if (
            repeatNum
              ? key[i] === currentKey + (repeatNum + 1)
              : key[i] === currentKey
          ) {
            repeatNum++;
          }
        }
        if (repeatNum) currentKey += repeatNum + 1;
      } else {
        currentKey = `m${i + 1}`;
      }
      key[i] = currentKey || '请替换' + i;
      // 追加JS模板
      enStr += `${key[i]}: \`${result['en']?.[i] || ''}\`,`;
      // 追加JSON对象
      JSONObject['en'][key[i]] = result['en']?.[i] || '';
    });
  }
  rawStr = rawStr.replace('<% en %>', enStr);
  // 完成其他语言拼接
  Object.entries(result).forEach(([lang, words]) => {
    if (lang === 'en') return;
    if (!words) return (rawStr = rawStr.replace(`<% ${lang} %>`, ''));
    let langStr = '';
    for (let i = 0; i < key.length; i++) {
      langStr += `${key[i]}: \`${words?.[i] || ''}\`,`;

      JSONObject[lang][key[i]] = words?.[i] || '' || '';
    }
    rawStr = rawStr.replace(`<% ${lang} %>`, langStr);
  });
  // 格式化代码

  const options = { indent_size: 2, space_in_empty_paren: true };
  rawStr = JSBeautify(rawStr, options);
  let JSONStr = '';
  // JSONObject.sdf=JSONObject;
  try {
    JSONStr = JSON.stringify(JSONObject, null, 2);
  } catch (e) {
    console.log(e);
  }
  return [rawStr, JSONStr];
}
