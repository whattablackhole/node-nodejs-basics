import { Worker } from "worker_threads";
import os from "os";
import { fileURLToPath } from "node:url";
import path from "path";
import { resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = resolve(__dirname, "./worker.js")

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const results = [];
  const workerPromises = [];

  for (let i = 0; i < numCPUs; i++) {
    const promise = new Promise((resolve) => {
      const worker = new Worker(workerPath);
      const workerId = i;

      worker.on("message", (result) => {
        results[workerId] = { status: "resolved", data: result };
        resolve();
      });

      worker.on("error", () => {
        results[workerId] = { status: "error", data: null };
        resolve();
      });

      worker.postMessage(i + 10);
    });

    workerPromises.push(promise);
  }

  await Promise.all(workerPromises);
  console.log(results);
};

await performCalculations();
