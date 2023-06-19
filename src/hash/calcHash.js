import crypto from "crypto";
import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "node:url";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async (path = resolve(__dirname, "./files/fileToCalculateHashFor.txt")) => {
    const content = await fs
    .readFile(path, { encoding: "utf-8" })
    const hash = crypto.createHash('sha256');
    hash.update(content);
    console.log(hash.digest('hex'));
};

await calculateHash();