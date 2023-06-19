import { spawn } from "node:child_process";
import path from "path";
import { fileURLToPath } from "node:url";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [
    resolve(__dirname, "./files/script.js"),
    ...args,
  ]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["someArgument1", "someArgument2"]);
