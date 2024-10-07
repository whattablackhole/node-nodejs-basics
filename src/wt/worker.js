import { parentPort } from "node:worker_threads";

const memo = {};

const nthFibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = nthFibonacci(n - 1) + nthFibonacci(n - 2);
  return memo[n];
};

parentPort.on("message", (n) => {
  const result = nthFibonacci(n);
  parentPort.postMessage(result);
});
