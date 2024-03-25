let fs = require("fs");
let input = fs.readFileSync("./DFS기본.txt").toString().split("\n");
let n = Number(input[0]); // 정점의 개수(N)
let m = Number(input[1]); // 간선의 개수(M)
let graph = []; // 그래프 정보 입력

for (let i = 1; i <= n; i += 1) {
  graph[i] = [];
}

for (let i = 2; i <= m + 1; i += 1) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
let visit = Array(n + 1).fill(false);

const dfs = (x) => {
  visit[x] = true;
  console.log(visit);
  cnt += 1;
  for (let y of graph[x]) {
    if (!visit[y]) dfs(y);
  }
};

dfs(1);
console.log(cnt - 1);
