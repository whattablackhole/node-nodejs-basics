import fs from "node:fs";
import zlib from "node:zlib";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";

const decompress = async () => {
  const gunzip = zlib.createGunzip();

  const inputStream = fs.createReadStream(
    resolve(import.meta.dirname, "./files/archive.gz")
  );

  const outputStream = fs.createWriteStream(
    resolve(import.meta.dirname, "./files/fileToCompress.txt")
  );

  outputStream.on("finish", () => {
    fs.unlink(resolve(import.meta.dirname, "./files/archive.gz"), () => {});
  });

  await pipeline(inputStream, gunzip, outputStream);
};

await decompress();
