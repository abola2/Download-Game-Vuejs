
import fs from 'fs';

export function readFile(filePath: string)
{
    const file = fs.readFileSync(filePath, 'utf-8');
    return file;
}