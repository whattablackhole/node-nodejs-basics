import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";

// Just for fun, because I didn't see the output without a new line
const newLineBuffer = Buffer.from("\n", "utf8");

async function read() {
  const readableStream = fs.createReadStream(
    "src/streams/files/fileToRead.txt",
    { encoding: "utf-8" }
  );

  const addNewline = new Transform({
    transform(chunk, encoding, callback) {
      this.lastChunkEndsWithNewline =
        chunk[chunk.length - 1] === newLineBuffer[0];

      callback(null, chunk);
    },
    flush(callback) {
      if (!this.lastChunkEndsWithNewline) {
        callback(null, "\n");
      } else {
        callback();
      }
    },
  });

  await pipeline(readableStream, addNewline, process.stdout);
}

await read();
