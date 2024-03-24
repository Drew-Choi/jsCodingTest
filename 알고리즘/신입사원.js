let fs = require("fs");
let input = fs.readFileSync("./신입사원.txt").toString().split("\n");
let testCase = Number(input[0]);
let line = 1;

for (let tc = 0; tc < testCase; tc += 1) {
  let index = Number(input[line]);
  let group = [];
  for (let i = line + 1; i <= index + line; i += 1) {
    let data = input[i].split(" ").map(Number);
    group.push(data);
  }

  group.sort((a, b) => a[0] - b[0]);

  console.log(
    group.reduce(
      (acc, cur) => {
        if (cur[1] < acc.min) {
          acc.min = cur[1];
          acc.count += 1;
        }
        return acc;
      },
      { count: 0, min: 100001 }
    ).count
  );

  line += index + 1;
}

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let testCase = Number(input[0]);
// let line = 1;
// for (let tc = 0; tc < testCase; tc++) {
// n = Number(input[line]);
// let arr = [];
// for (let i = line + 1; i <= line + n; i++) {
//     let data = input[i].split(' ').map(Number);
//     arr.push(data);
//   }
// arr.sort((x, y) => x[0] - y[0]); // x 순위를 기준으로 오름차순 정렬 let count = 0;
// let minValue = 100001;
// for (let [x, y] of arr) {
// if (y < minValue) { // y 순위 값이 가장 작다면 카운트 minValue = y;
// count += 1;
// } }
//   console.log(count);
// line += n + 1; }
