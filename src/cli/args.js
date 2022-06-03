import process from "process";

export const parseArgs = () => {
  for (let i = 0; i < process.argv.length; i++) {
    console.log(`propName${[i]} is ${process.argv[i]}`);
  }
};

parseArgs();
