import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "node:url";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const remove = async (
  path = resolve(__dirname, "./files_copy/fileToRemove.txt")
) => {
  await fs.rm(path).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  });
};

await remove();
