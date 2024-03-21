// 재귀x
let a = 1;
let b = 1;

for (let i = 0; i < 7; i += 1) {
  let sum = a + b;
  a = b;
  b = sum;
}

// 재귀
const factorial = (number) => {
  if (number === 1 || number === 2) return 1;

  return factorial(number - 1) + factorial(number - 2);
};
