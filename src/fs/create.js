import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  const resolvedPath = resolve(__dirname, "./files/fresh.txt");
  const fileExists = await fs.stat(resolvedPath).catch(async (err) => { 
    if ((err.code === "ENOENT")) {
       await fs.writeFile(resolvedPath, "I am fresh and young");
       return undefined;
    }
    throw err;
  });
  if (fileExists) {
    throw new Error("FS operation failed");
  }
};

await create();
