import fs from 'fs';

export const remove = async () => {
    fs.unlink('./src/fs/files/fileToRemove.txt', err => {
        if (err) throw new Error("FS operation failed");
        console.log('Файл успешно удалён');
    });
};

remove();