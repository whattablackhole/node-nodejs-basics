import fs from "fs";
import { fileURLToPath } from "node:url";
import path from "path";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const stream = fs.createWriteStream(resolve(__dirname, "./files/fileToWrite.txt"));
  process.stdin.pipe(stream);
};

await write();