export type Langs = 'en' | 'ar' | 'tr' | 'ur' | 'in' | 'zh';

export type LangObject = {
  [key in 'en' | 'zh' | 'ar' | 'ur' | 'tr' | 'in']: Record<string, string>;
};

export type SheetSettings = {
  UILang: 'TR' | 'EN';
  prefix: string;
  keyMode: 'INDEX' | 'WORD';
  formatMode: 'JS' | 'JSON';
};

export interface OSSConfig {
  accessKeyId: string;
  aLiYunHost: string;
  bucketName: string;
  securityToken: string;
  accessKeySecret: string;
  objectName: string;
  url: string;
}

export type SheetFileData = {
  sheetId: string;
  sheetName: string;
  time: number;
  js?: string;
  json?: string;
};

export type CloudFile = {
  sheetId: string;
  url: string;
  modifyTime: number;
  formatMode: 'JS' | 'JSON';
};

export type History = {
  time: number;
  operator: string;
  sheetId: string;
  action: string;
};
