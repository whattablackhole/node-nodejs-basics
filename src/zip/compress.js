import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "node:url";
import path from "path";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const compress = async (
  srcPath = resolve(__dirname, "./files/fileToCompress.txt"),
  destPath = resolve(__dirname, "./files/archive.gz")
) => {
  const gzip = zlib.createGzip();
  const inputStream = fs.createReadStream(srcPath);
  const outputStream = fs.createWriteStream(destPath);

  outputStream.on("finish", () => {
    fs.unlink(srcPath, () => {});
  });

  inputStream.pipe(gzip).pipe(outputStream);
};

await compress();
