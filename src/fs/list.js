import fs from "node:fs/promises";

const list = async () => {
  const result = await fs.readdir("src/fs/files", { recursive: true }).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  });
  console.log(result);
};

await list();
