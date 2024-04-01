const fs = require("fs");
const input = fs.readFileSync("./로또.txt").toString().split("\n");

const dfs = (depth, start) => {
  if (depth === 6) {
    for (let el of selected) {
      answer += arr[el] + " ";
    }
    answer += "\n";
  }

  for (let i = start; i < arr.length; i += 1) {
    if (visited[i]) continue;

    selected.push(i);
    visited[i] = true;

    dfs(depth + 1, start + 1);
    selected.pop();
    visited[i] = false;
  }
};

let visited = Array();
let selected = [];
let answer = "";
