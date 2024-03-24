let fs = require("fs");
let input = fs.readFileSync("./지방예산상한선복습.txt").toString().split("\n");

let array = input[1].split(" ").map(Number);
let totalPrice = Number(input[2]);

const binarySearchRecursion = ({ start, end, array, totalPrice }) => {
  if (start > end) return end;

  // 이게 중요함
  let mid = parseInt((start + end) / 2, 10);

  let total = array.reduce((acc, el) => (acc += Math.min(el, mid)), 0);
  if (total <= totalPrice)
    return binarySearchRecursion({
      start: mid + 1,
      end,
      array,
      totalPrice,
    });

  return binarySearchRecursion({
    start,
    end: mid - 1,
    array,
    totalPrice,
  });
};

const result = binarySearchRecursion({
  start: 1,
  end: array.reduce((a, b) => Math.max(a, b)),
  array,
  totalPrice,
});

console.log(result);
