import fs from "node:fs/promises";

const create = async () => {
  try {
    await fs.writeFile("src/fs/files/fresh.txt", "I am fresh and young", {
      flag: "wx",
    });
  } catch (err) {
    if (err.code === "EEXIST") {
      throw new Error("FS operation failed");
    }
  }
};

await create();
