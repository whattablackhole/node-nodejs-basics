import fs from "node:fs/promises";
import { resolve } from 'node:path';
import path from "path";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const copy = async (srcPath = resolve(__dirname, "./files"), destPath = resolve(__dirname, "./files_copy")) => {
  await fs.access(srcPath).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  });

  let destPathExists = await fs
    .stat(destPath)
    .catch(async (err) => {
      if (err.code === "ENOENT") {
        return await fs.cp(srcPath, destPath, { recursive: true });
      }
      throw err;
    });

  if (destPathExists) {
    throw new Error("FS operation failed");
  }
};

await copy();
