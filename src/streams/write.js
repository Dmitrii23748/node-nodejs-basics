import fs from 'fs';


export const write = async () => {
    const output = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.pipe(output);
};
write();