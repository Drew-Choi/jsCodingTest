let fs = require("fs");
let input = fs.readFileSync("./k번째수.txt").toString().split("\n");

let [i, x] = input;
const arrayCount = Number(i);
const k = Number(x);

let start = 1;
let end = 10 ** 10;

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2, 10);

  let total = 0;
  for (let i = 1; i <= arrayCount; i += 1) {
    total += Math.min(parseInt(mid / i), arrayCount);
  }
  if (total >= k) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(result);
