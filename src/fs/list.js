import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async (path = resolve(__dirname, "./files")) => {
  const result = await fs.readdir(path, { recursive: true }).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  });
  console.log(result);
};

await list();
