const str = "bcdf";

const findLetterr = (str) => {
  for (let i = 0; i < str.length; i += 1) {
    const code = str.charCodeAt(i);

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }

  return undefined;
};

console.log(findLetterr(str));
