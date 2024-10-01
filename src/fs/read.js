import fs from "node:fs/promises";

const read = async () => {
  const content = await fs
    .readFile("src/fs/files/fileToRead.txt", { encoding: "utf-8" })
    .catch((err) => {
      if (err.code === "ENOENT") {
        throw new Error("FS operation failed");
      }
      throw err;
    });
  console.log(content);
};

await read();
