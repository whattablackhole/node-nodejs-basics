import fs from "node:fs";
import zlib from "node:zlib";
import { resolve } from "node:path";
import { pipeline } from "node:stream/promises";

const compress = async () => {
  const gzip = zlib.createGzip();

  const inputStream = fs.createReadStream(
    resolve(import.meta.dirname, "./files/fileToCompress.txt")
  );
  const outputStream = fs.createWriteStream(
    resolve(import.meta.dirname, "./files/archive.gz")
  );

  outputStream.on("finish", () => {
    fs.unlink(
      resolve(import.meta.dirname, "./files/fileToCompress.txt"),
      () => {}
    );
  });

  await pipeline(inputStream, gzip, outputStream);
};

await compress();
