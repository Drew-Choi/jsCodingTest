const fs = require("fs");
const input = fs
  .readFileSync("./도영이가만든맛있는음식.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);
const arr = [];
// 2개 혹은 3개의 재료들이 들어올 수 있어서 배열에 배열요소로 재료를 넣어준다.
for (let i = 1; i <= n; i += 1) {
  const [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

let visited = Array(n).fill(false);
let selected = [];
let answer = 1e9;

const dfs = (depth, start) => {
  if (depth >= 1) {
    let totalX = 1;
    let totalY = 0;
    for (let i of selected) {
      let [x, y] = arr[i];
      totalX *= x;
      totalY += y;
    }

    answer = Math.min(answer, Math.abs(totalX - totalY));
  }

  for (let i = start; i < n; i += 1) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(0, 0);

console.log(answer);
