const arr = [
  [0, 4],
  [1, 2],
  [1, -1],
  [2, 2],
  [3, 3],
];

const result = arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

const result2 = arr.sort((a, b) => {
  if (a[0] !== b[0]) return a[1] - b[1];

  return a[0] - b[0];
});

console.log(result2);
