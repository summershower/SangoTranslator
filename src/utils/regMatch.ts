const urReg = /[\u0600-\u06FF]/g; // 有任何一个乌尔都语即可
const zhReg = /[\u4e00-\u9fa5]/g; // 有任何一个汉字即可
const trRef = /[ÇçĞğıİÖöŞşÜü]/g; // 土耳其字母和英语字母有大量重合,只能判定特殊字符
const enReg = /[^a-zA-Z0-9_\-.$*@&;'"?/><,=~:：，。？ ]/; // 除了英文数字和符号外不能出现其他文本
export const isUr = (text: string): boolean => {
  return urReg.test(text);
};

export const isTr = (text: string): boolean => {
  return trRef.test(text);
};

export const isAr = (text: string): boolean => {
  return urReg.test(text);
};

export const isEn = (text: string): boolean => {
  return !enReg.test(text);
};

export const isZh = (text: string): boolean => {
  return zhReg.test(text);
};
