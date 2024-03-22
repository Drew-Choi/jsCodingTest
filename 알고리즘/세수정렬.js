let arr = [3, 1, 2];

arr.sort((a, b) => a - b);

let arr2 = [5, 5, 2, 3, 4, 1];

const result = new Set(arr2.sort((a, b) => b - a));
console.log([...result].join(" "));
