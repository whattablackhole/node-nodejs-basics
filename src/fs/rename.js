import fs from "node:fs/promises";

const rename = async () => {
  try {
    await fs.stat("src/fs/files_copy/properFilename.md");
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }

  try {
    await fs.rename(
      "src/fs/files_copy/wrongFilename.txt",
      "src/fs/files_copy/properFilename.md"
    );
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw err;
  }
};

await rename();
