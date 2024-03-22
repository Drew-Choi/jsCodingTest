// 재귀x
let a = 1;
let b = 1;

for (let i = 0; i < 8; i += 1) {
  let sum = a + b;
  a = b;
  b = sum;
}

console.log(b);

// 재귀
const recursion = (number) => {
  if (number <= 1) return 1;

  return recursion(number - 1) + recursion(number - 2);
};

console.log(recursion(9));
