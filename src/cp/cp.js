import { spawn } from "node:child_process";
import { resolve } from "node:path";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [
    resolve(import.meta.dirname, "./files/script.js"),
    ...args,
  ]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["someArgument1", "someArgument2"]);
