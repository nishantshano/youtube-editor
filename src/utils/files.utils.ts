import { fileURLToPath } from 'url';
import { dirname } from 'path';


export const getDirName = (filePath: string) => {
    const __filename = fileURLToPath(filePath);
    return dirname(__filename);
} 