let fs = require("fs");
let input = fs.readFileSync("./박터트리기.txt").toString().split("\n");
let [n, k] = input[0].split(" ").map(Number);

let summary = 0;
for (let i = 1; i <= k; i += 1) {
  summary += i;
}
console.log("a", summary);

if (summary > n) {
  console.log(-1);
} else {
  n -= summary;
  console.log("b:", n);
  if (n % k === 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
}
