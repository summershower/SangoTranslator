import type { SheetSettings, CloudFile } from '@/Types';
const defaultSettings: SheetSettings = {
  UILang: 'TR',
  prefix: '',
  keyMode: 'WORD',
  formatMode: 'JS',
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

export function saveCloudFile(file: CloudFile) {
  try {
    let s = localStorage.getItem('cloudSheet');
    let files: CloudFile[] = s
      ? [
          file,
          ...JSON.parse(s).filter((v: CloudFile) => v.sheetId !== file.sheetId),
        ]
      : [file];
    localStorage.setItem('cloudSheet', JSON.stringify(files));
  } catch {}
}
export function readCloudFiles() {
  try {
    let s = localStorage.getItem('cloudSheet');
    let arr: CloudFile[] = s ? JSON.parse(s) : [];
    return arr;
  } catch {
    return [];
  }
}
