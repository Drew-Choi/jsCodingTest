const n = 3;

let visited = Array(n).fill(false);
let selected = [];
const arr = visited.map((_, index) => index + 1);

let answer = "";

const dfs = (arr, depth) => {
  if (depth === n) {
    for (let select of selected) {
      answer += arr[select] + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(arr, 0);

console.log(answer);
