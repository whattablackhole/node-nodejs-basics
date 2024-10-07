const parseArgs = () => {
  const args = process.argv.slice(2);
  let result = "";

  args.forEach((arg, i) => {
    if (arg.startsWith("--")) {
      result += `${arg.slice(2)} is ${args[i + 1]}${
        i + 1 < args.length - 1 ? ", " : ""
      }`;
    }
  });

  console.log(result);
};

parseArgs();
