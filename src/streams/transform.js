import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(data, encoding, callback) {
      let reversedData = data.toString().split("").reverse().join("");
      this.push(reversedData);
      callback();
    },
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
