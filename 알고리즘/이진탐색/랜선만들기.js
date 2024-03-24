let fs = require("fs");
let input = fs.readFileSync("./랜선만들기.txt").toString().split("\n");

let target = Number(input[0].split(" ")[1]);
let array = input.slice(1).map(Number);

let start = 1;
let end = array.reduce((a, b) => Math.max(a, b));

let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2, 10);
  let total = 0;
  for (let x of array) {
    total += parseInt(x / mid, 10);
  }
  if (total < target) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = mid;
  }
}

console.log(result);

// const binarySearchRecursion = ({ start, end, target, array }) => {
//   if (start > end) return end;

//   let mid = parseInt((start + end) / 2, 10);

//   let made = 0;
//   for (let x of array) {
//     made += parseInt(x / mid, 10);
//   }

//   if (made < target)
//     return binarySearchRecursion({ start, end: mid - 1, target, array });

//   return binarySearchRecursion({ start: mid + 1, end, target, array });
// };

// console.log(
//   binarySearchRecursion({
//     start,
//     end,
//     target,
//     array,
//   })
// );
