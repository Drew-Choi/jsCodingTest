let n = 4;
let m = 2;

let arr = [];
for (let i = 1; i <= n; i += 1) {
  arr.push(i);
}

let visited = Array(n).fill(false); // 방문여부
let selected = []; // 현재 순열에 포함된 원소 element

let answer = "";

const dfs = (arr, depth) => {
  console.log(selected);
  if (depth === m) {
    for (let i of selected) {
      answer += arr[i] + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (visited[i]) continue; // 이미 처리된 원소 무시
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(arr, 0);

console.log(answer);
