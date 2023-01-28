import { useState, useEffect } from 'react';
import { readFile, initDB } from '@/utils/indexDB';
import type { SheetFileData } from '@/Types/db';

export default (): SheetFileData[] => {
    const [sheets, setSheets] = useState<SheetFileData[]>([]);

    useEffect(() => {
        initDB().then(() => {
            readFile().then((res: any) => {
                const sheets: SheetFileData[] = Array.isArray(res)
                    ? res.filter((v) => v?.js || v?.json).sort((a, b) => b.time - a.time)
                    : [];
                if (sheets.length) {
                    setSheets(sheets);
                }
            });
        });
    }, []);
    return sheets;
}