import fs from "fs";
import { fileURLToPath } from "node:url";
import path from "path";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  fs.createReadStream(resolve(__dirname, "./files/fileToRead.txt")).pipe(process.stdout);
};

await read();
