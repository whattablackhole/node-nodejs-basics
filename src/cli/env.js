const parseEnv = () => {
  const filteredRssKeys = Object.keys(process.env).filter((key) =>
    key.startsWith("RSS_")
  );
  let result = "";
  filteredRssKeys.forEach((key, i) => {
    result += `${key}=${process.env[key]}${
      i === filteredRssKeys.length - 1 ? "" : "; "
    }`;
  });
  console.log(result);
};

parseEnv();