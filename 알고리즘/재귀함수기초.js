let n = 100;
let s = 0;

for (let i = 1; i < n + 1; i += 1) {
  s += i;
}

console.log(s);
// O(n)

console.log((n * (n + 1)) / 2);
// O(1)

const recursion = (n) => {
  if (n <= 1) return 1;

  return n * recursion(n - 1);
};
console.log("재귀", recursion(5));
