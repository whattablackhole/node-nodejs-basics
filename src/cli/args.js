const parseArgs = () => {
  const args = process.argv.slice(2);
  let result = "";

  args.forEach((arg, i) => {
    if (arg.startsWith("--")) {
      result += `${arg.slice(2)} is ${args[i + 1]}${
        i > args.length - 3 ? "" : ", "
      }`;
    }
  });

  console.log(result);
};

parseArgs();
