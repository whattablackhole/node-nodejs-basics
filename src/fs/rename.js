import fs from "node:fs/promises";
import path from "path";
import { resolve } from 'node:path';
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async (
  rootPath = resolve(__dirname, "./files_copy/wrongFilename.txt"),
  destPath = resolve(__dirname, "./files_copy/properFilename.md")
) => {
  const result = await fs.stat(destPath).catch(async (err) => {
    if (err.code == "ENOENT") {
      await fs.rename(rootPath, destPath).catch((err) => {
        throw new Error("FS operation failed");
      });
    }
  });

  if (result) {
    throw new Error("FS operation failed");
  }
};

await rename();