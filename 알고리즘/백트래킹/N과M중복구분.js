const fs = require("fs");
const input = fs.readFileSync("./N과M중복구분.txt").toString().split("\n");

const n = Number(input[0].split(" ")[0]);
const depthNumber = Number(input[0].split(" ")[1]);

let visited = Array(n).fill(false);
let arr = visited.map((_, index) => index + 1);
let selected = [];

let answer = "";
const dfs = (arr, depth, start) => {
  if (depth === depthNumber) {
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

dfs(arr, 0, 0);

console.log(answer);
/*

       1              2             3             4
    2  3  4        1  3  4       1  2  4       1  2  3


1 2 // -
1 3 // -
1 4 // -
2 1 //
2 3 // -
2 4 // -
3 1 //
3 2 //
3 4 // -
4 1 //
4 2 //
4 3 //
*/
