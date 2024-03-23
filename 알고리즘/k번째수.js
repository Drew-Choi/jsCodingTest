const K = 2;

const arr = [4, 1, 2, 3, 5];

const result = (arr, k) => {
  return arr.sort((a, b) => a - b)[k - 1];
};

console.log(result(arr, K));
