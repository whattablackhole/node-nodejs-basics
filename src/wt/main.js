import { Worker } from "node:worker_threads";
import os from "node:os";
import { resolve } from "node:path";

const workerPath = resolve(import.meta.dirname, "./worker.js");

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
        worker.terminate();
        resolve();
      });

      worker.on("error", () => {
        results[workerId] = { status: "error", data: null };
        worker.terminate();
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
