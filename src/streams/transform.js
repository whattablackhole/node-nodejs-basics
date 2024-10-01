import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  const transformStream = new Transform({
    transform(data, encoding, callback) {
      let reversedData = data.toString().split("").reverse().join("");
      this.push(reversedData + "\n");
      callback();
    },
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
