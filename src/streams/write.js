import fs from "node:fs";
import { pipeline } from "node:stream/promises";

const write = async () => {
  console.log("press Ctrl+C to exit");
  const writeStream = fs.createWriteStream("src/streams/files/fileToWrite.txt");
  await pipeline(process.stdin, writeStream);
};

await write();
