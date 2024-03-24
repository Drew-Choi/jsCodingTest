const binarySearch = (arr, target, start, end) => {
  if (start > end) return -1;

  let mid = parseInt((start + end) / 2, 10);

  if (arr[mid] === target) return mid;

  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);

  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
};

let target = 7;
arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let result = binarySearch(arr, target, 0, arr.length - 1);

console.log(result);
