let fs = require("fs");
let input = fs.readFileSync("./피보나치응용.txt").toString().split("\n");
let xLength = Number(input[0]);
let cases = input.slice(1).map(Number);

let fibos = [0, 1];
while (fibos[fibos.length - 1] < Math.max(...cases)) {
  fibos.push(fibos[fibos.length - 1] + fibos[fibos.length - 2]);
}

for (let index = 0; index < xLength; index += 1) {
  let x = cases[index];
  let result = [];
  let i = fibos.length - 1;

  while (x > 0) {
    if (x >= fibos[i]) {
      x -= fibos[i];
      result.push(fibos[i]);
    }
    i -= 1;
  }

  console.log(result.reverse().join(" "));
}
