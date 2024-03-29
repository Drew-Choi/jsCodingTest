const fs = require("fs");
const input = fs.readFileSync("./외판원.txt").toString().split("\n");

let number = Number(input[0]);
let graph = Array.from(Array(number + 1), (_, index) => {
  if (index !== 0) {
    const line = input[index].split(" ").map(Number);

    return [0, ...line];
  }
  return [0];
});
console.log(graph);

let visited = Array(11).fill(false);
let result = [];
let minValue = 1e9;

const dfs = (depth) => {
  if (depth === number - 1) {
    let totalCost = 0;
    let cur = 1;
    for (let i = 0; i < number - 1; i += 1) {
      let nextNode = result[i];
      let cost = graph[cur][nextNode];
      if (cost === 0) return;
      totalCost += cost;
      cur = nextNode;
    }

    let cost = graph[cur][1];
    if (cost === 0) return;
    totalCost += cost;
    minValue = Math.min(minValue, totalCost);
  }

  for (let i = 2; i <= number; i += 1) {
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
};

dfs(0);

console.log(minValue);
