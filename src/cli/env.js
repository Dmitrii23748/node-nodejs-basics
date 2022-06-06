import process from "process";

export const parseEnv = () => {
  for (let proc in process.env) {
    if (proc.match(/^RSS_/)) {
      console.log(`${proc}=${process.env[proc]}`);
    }
  }
};
parseEnv();
