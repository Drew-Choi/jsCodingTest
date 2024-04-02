const str = "zababzabababz";

const findRepeat = (str) => {
  const regex = /^(\w+)\1+$/;
  const match = str.match(regex);
  return match ? match[1] : null;
};

console.log(findRepeat(str));
