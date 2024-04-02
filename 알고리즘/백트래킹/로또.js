const fs = require("fs");
const input = fs.readFileSync("./로또.txt").toString().split("\n");

let arr = [];
let visited = [];
let selected = [];
let answer = "";

const dfs = (arr, depth, start) => {
  if (depth === 6) {
    for (let el of selected) {
      answer += arr[el] + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = start; i < arr.length; i += 1) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
};

for (let i = 0; i < input.length; i += 1) {
  let data = input[i].split(" ").map(Number);

  if (data[0] === 0) {
    break;
  } else {
    const n = data[0];
    arr = data.slice(1);
    visited = Array(n).fill(false);
    selected = [];
    answer = "";
    dfs(arr, 0, 0);
    console.log(answer);
  }
}
