let input = 12;

let result = 0;

for (let i = 1; i <= input; i += 1) {
  result += i;
}

const constant = (input * (input + 1)) / 2;

console.log(result);

console.log("공식", constant);
