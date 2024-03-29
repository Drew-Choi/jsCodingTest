const fs = require("fs");
const input = fs.readFileSync("./0으로만들기.txt").toString().split("\n");

const tc = Number(input[0]);

// let n = 0;
// let arr = [];

// const dfs = (result, depth) => {
//   if (depth === n - 1) {
//     let str = "";
//     for (let i = 0; i < n - 1; i += 1) {
//       str += arr[i] + result[i];
//     }

//     str += arr[n - 1] + "";

//     const current = eval(str.split(" ").join(""));

//     if (current === 0) {
//       console.log(str);
//     }

//     return;
//   }

//   for (let x of [" ", "+", "-"]) {
//     result.push(x);
//     dfs(result, depth + 1);
//     result.pop();
//   }
// };

// for (let i = 1; i <= tc; i += 1) {
//   n = Number(input[i]);
//   arr = []; // 1
//   for (let x = 1; x <= n; x += 1) {
//     arr.push(x);
//   }

//   dfs([], 0);
// }

let n = 0;
const calculate = ["+", " ", "-"].sort();
let arr = [];

const dfs = (result, depth) => {
  if (depth === n - 1) {
    let str = "";
    for (let i = 0; i < n - 1; i += 1) {
      str += arr[i] + result[i];
    }
    str += arr[n - 1];

    const currentSum = eval(str.split(" ").join(""));

    if (currentSum === 0) {
      console.log(str);
    }
    return;
  }

  for (let el of calculate) {
    result.push(el);
    dfs(result, depth + 1);
    result.pop();
  }
};

for (let tcNumber = 1; tcNumber <= tc; tcNumber += 1) {
  n = Number(input[tcNumber]);
  arr = Array.from(Array(n), (_, index) => index + 1);

  dfs([], 0);
}
