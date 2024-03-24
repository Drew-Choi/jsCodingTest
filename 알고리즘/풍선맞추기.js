// 포인트 해당 높이에 화살이 존재하는지 안하는지
let fs = require("fs");
let input = fs.readFileSync("./풍선맞추기.txt").toString().split("\n");
let { length, bubble } = {
  length: Number(input[0]),
  bubble: input[1].split(" ").map(Number),
};

let arrow = new Array(length + 1).fill(0);

let count = 0;

for (let x of bubble) {
  if (arrow[x] > 0) {
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    arrow[x - 1] += 1;
    count += 1;
  }
}
console.log(count);
