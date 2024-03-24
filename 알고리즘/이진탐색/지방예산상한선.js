let fs = require("fs");
let input = fs.readFileSync("./지방예산상한선.txt").toString().split("\n");

let arr = input[1].split(" ").map(Number);
let totalPrice = Number(input[2]);

// 이진탐색 시작점
// let start = 1;
// let end = arr.reduce((a, b) => Math.max(a, b));

// let result = 0;
// while (start <= end) {
//   let mid = parseInt((start + end) / 2, 10);

//   let total = 0;

//   for (let x of arr) {
//     total += Math.min(mid, x);
//   }

//   if (total <= totalPrice) {
//     result = mid;
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }

// console.log(result);

//재귀용법으로
const binarySearchRecursion = (arr, start, end, totalPrice) => {
  if (start > end) return end;

  let mid = parseInt((start + end) / 2, 10);

  let total = arr.reduce((acc, cur) => (acc += Math.min(mid, cur)), 0);

  if (total <= totalPrice)
    return binarySearchRecursion(arr, mid + 1, end, totalPrice);

  return binarySearchRecursion(arr, start, mid - 1, totalPrice);
};

console.log(binarySearchRecursion(arr, start, end, totalPrice));
