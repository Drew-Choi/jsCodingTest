let fs = require("fs");
let input = fs.readFileSync("./나무자르기.txt").toString().split("\n");

let target = Number(input[0].split(" ")[1]);
let array = input[1].split(" ").map(Number);

let start = 1;
let end = array.reduce((a, b) => Math.max(a, b));

const binarySearchRecursion = ({ start, end, target, array }) => {
  if (start > end) return end;

  let mid = parseInt((start + end) / 2, 10);

  let getItem = array.reduce(
    (acc, height) => (acc += height > mid ? height - mid : 0),
    0
  );

  if (getItem < target)
    return binarySearchRecursion({ start, end: mid - 1, target, array });

  return binarySearchRecursion({ start: mid + 1, end, target, array });
};

console.log(binarySearchRecursion({ start, end, target, array }));
