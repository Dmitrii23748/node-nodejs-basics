import fs from "fs";

const data = "I am fresh and young";

export const create = async () => {
  if (fs.existsSync("./src/fs/files/fresh.txt")) {
    throw new Error("FS operation failed");
  } else {
    fs.writeFile("./src/fs/files/fresh.txt", data, () => {});
  }
};
create();
