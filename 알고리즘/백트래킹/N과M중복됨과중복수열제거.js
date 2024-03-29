const number = 4;
const depthNumber = 2;

const arr = Array.from(Array(number), (_, index) => index + 1);
const selected = [];

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
    selected.push(i);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
};

dfs(arr, 0, 0);

console.log(answer);

/*
    
     1        2        3        4
  1 2 3 4  1 2 3 4  1 2 3 4  1 2 3 4

*/
