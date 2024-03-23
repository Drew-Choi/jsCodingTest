let arr = [
  ...new Set([
    "but",
    "i",
    "wont",
    "hesitate",
    "no",
    "more",
    "no",
    "more",
    "it",
    "cannot",
    "wait",
    "im",
    "yours",
  ]),
];

const answer = arr.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;

  return a < b ? -1 : 1;
});

console.log(answer);
