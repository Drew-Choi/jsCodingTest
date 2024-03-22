let arr = [66, 77, 54, 32, 10, 5, 11, 15];

const recursion = (arr) => {
  let arrLength = arr.length;

  if (arrLength <= 1) return arr;

  let point = [arr.shift()];
  let first = [];
  let second = [];

  for (let i in arr) {
    if (arr[i] < point) {
      first.push(arr[i]);
    } else {
      second.push(arr[i]);
    }
  }

  return recursion(first).concat(point, recursion(second));
};

console.log(recursion(arr));
