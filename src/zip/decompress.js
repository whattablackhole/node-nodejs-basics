import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "node:url";
import path from "path";
import { resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async (
  srcPath = resolve(__dirname, "./files/archive.gz"),
  destPath = resolve(__dirname, "./files/fileToCompress.txt")
) => {
  const gunzip = zlib.createGunzip();
  const inputStream = fs.createReadStream(srcPath);
  const outputStream = fs.createWriteStream(destPath);

  outputStream.on("finish", () => {
    fs.unlink(srcPath, () => {});
  });
  
  inputStream.pipe(gunzip).pipe(outputStream);
};

await decompress();
