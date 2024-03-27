const n = 3;

let stack = [
  { index: 0, depth: 0, visited: Array(n).fill(false), selected: [] },
];

let answer = "";

while (stack.length > 0) {
  let { index, depth, visited, selected } = stack.pop();

  console.log(stack);

  for (let i = index; i < n; i += 1) {
    if (!visited[i]) {
      let newVisited = [...visited];
      newVisited[i] = true;

      let newSelected = [...selected, i];

      if (newSelected.length === n) {
        for (let select of newSelected) {
          answer += select + 1 + " ";
        }
        answer += "\n";
      } else {
        stack.push({
          index: i + 1,
          depth: depth + 1,
          visited: newVisited,
          selected: newSelected,
        });
      }
    }
  }
}

console.log(answer);
