import type { SheetSettings } from '@/Types';
const defaultSettings: SheetSettings = {
  UILang: 'TR',
  prefix: '',
  keyMode: 'WORD',
  formatType: 'JS',
};
export function saveSheetSettings<
  K extends keyof SheetSettings,
  V extends SheetSettings[K],
>(sheetId: string, key: K, value: V): void {
  try {
    let s = localStorage.getItem(sheetId);
    let obj: SheetSettings = s
      ? {
          ...JSON.parse(s),
          [key]: value,
        }
      : {
          ...defaultSettings,
          [key]: value,
        };
    localStorage.setItem(sheetId, JSON.stringify(obj));
  } catch {}
}
export function readSheetSettings<K extends keyof SheetSettings>(
  sheetId: string,
  key: K,
): SheetSettings[K] | undefined {
  try {
    let s = localStorage.getItem(sheetId);
    let obj: SheetSettings = s ? JSON.parse(s) : defaultSettings;
    return obj[key];
  } catch {}
}
