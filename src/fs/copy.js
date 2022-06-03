import fs from "fs";

export const copy = async () => {
  if (!fs.existsSync("./src/fs/files")) {
    throw new Error("FS operation failed");
  } else {
    fs.readdir("./src/fs/files", (err, files) => {
      if (err) throw new Error("FS operation failed");
      if (fs.existsSync("./src/fs/files_copy")) {
        throw new Error("FS operation failed");
      } else {
        fs.mkdir("./src/fs/files_copy", (err) => {
          if (err) throw new Error("FS operation failed");
          files.forEach((item) => {
            fs.copyFile(
              `./src/fs/files/${item}`,
              `./src/fs/files_copy/${item}`,
              (err) => {
                if (err) throw new Error("FS operation failed");
              }
            );
          });
        });
      }
    });
  }
};

copy();
