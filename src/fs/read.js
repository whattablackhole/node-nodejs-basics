import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async (path = resolve(__dirname, "files/fileToRead.txt")) => {
  const content = await fs
    .readFile(path, { encoding: "utf-8" })
    .catch((err) => {
      if (err.code === "ENOENT") {
        throw new Error("FS operation failed");
      }
      throw err;
    });
  console.log(content);
};

await read();
