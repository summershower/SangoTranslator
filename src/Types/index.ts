export type LangObject = {
  [key in 'en' | 'zh' | 'ar' | 'ur' | 'tr']: Record<string, string>;
};
