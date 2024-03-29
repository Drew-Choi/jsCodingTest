const number = 4;
const depthNumber = 2;

let arr = Array.from(Array(number), (_, index) => index + 1);
let selected = [];

let answer = "";

const dfs = (arr, depth) => {
  if (depth === depthNumber) {
    for (let el of selected) {
      answer += arr[el] + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i += 1) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
};

dfs(arr, 0);

console.log(answer);

/*

    1       2      3
  2  3    1  3    1  2
 
   */
