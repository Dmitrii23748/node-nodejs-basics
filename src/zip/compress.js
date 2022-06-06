import zlib from "zlib";
import fs from "fs";

export const compress = async () => {
  const gzip = zlib.createGzip();
  const read = fs.createReadStream("./src/zip/files/fileToCompress.txt");
  const write = fs.createWriteStream("./src/zip/files/archive.gz");
  read.pipe(gzip).pipe(write);
};

compress();
