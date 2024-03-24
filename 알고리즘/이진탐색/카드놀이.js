let fs = require("fs");
let input = fs.readFileSync("./카드놀이.txt").toString().split("\n");

let myCard = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let searchArr = input[3].split(" ").map(Number);

const bound = ({ start, end, target, array, upper = false }) => {
  while (start < end) {
    let mid = parseInt((start + end) / 2, 10);

    if (!upper) {
      array[mid] >= target ? (end = mid) : (start = mid + 1);
    } else {
      array[mid] > target ? (end = mid) : (start = mid + 1);
    }
  }
  return end;
};

const countByRage = ({ array, value }) => {
  const low = bound({
    start: 0,
    end: array.length,
    target: value,
    array,
  });

  const high = bound({
    start: 0,
    end: array.length,
    target: value,
    array,
    upper: true,
  });

  return high - low;
};

let result = "";
for (let x of searchArr) {
  result += `${countByRage({ array: myCard, value: x })} `;
}

console.log(result);
