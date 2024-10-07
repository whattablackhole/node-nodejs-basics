import fs from "node:fs/promises";


const remove = async () => {
  await fs.rm("src/fs/files_copy/fileToRemove.txt").catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  });
};

await remove();
