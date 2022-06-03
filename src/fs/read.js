import fs from 'fs';

export const read = async () => {
    fs.readFile("./src/fs/files/fileToRead.txt", function(err, data){
        if (err) {
            throw new Error("FS operation failed");
        } else {
            console.log(data.toString());
        }
    });
};
read();