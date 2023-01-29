export type LangObject = {
  [key in 'en' | 'zh' | 'ar' | 'ur' | 'tr']: Record<string, string>;
};

export type SheetSettings = {
  UILang: 'TR' | 'EN';
  prefix: string;
  keyMode: 'INDEX' | 'WORD';
  formatMode: 'JS' | 'JSON';
};
