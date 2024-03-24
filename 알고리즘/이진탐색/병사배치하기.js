let fs = require("fs");
let input = fs.readFileSync("./병사배치하기.txt").toString().split("\n");

let armyLength = Number(input[0]);
let armyArray = input[1].split(" ").map(Number).reverse();

const lowerBound = ({ start, end, target, array }) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2, 10);

    if (array[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
};

// LIS 알고리즘 중요
let minus = [0];

for (let x of armyArray) {
  if (minus[minus.length - 1] < x) {
    minus.push(x);
  } else {
    let index = lowerBound({
      start: 0,
      end: minus.length,
      target: x,
      array: minus,
    });
    minus[index] = x;
  }
  console.log(minus);
}

console.log(armyLength - (minus.length - 1));
