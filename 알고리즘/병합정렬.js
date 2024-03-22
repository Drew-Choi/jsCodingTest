let arr = [5, 10, 66, 77, 54, 32, 11, 15];

const recursion = (arr) => {
  let arrLength = arr.length;
  let result = [];

  if (arrLength <= 1) return arr;

  let middlePoint = parseInt(arrLength / 2);
  let first = recursion(arr.slice(0, middlePoint));
  let second = recursion(arr.slice(middlePoint));

  while (first.length !== 0 && second.length !== 0) {
    if (first[0] < second[0]) {
      result.push(first.shift());
    } else {
      result.push(second.shift());
    }
  }

  while (first.length !== 0) {
    result.push(first.shift());
  }

  while (second.length !== 0) {
    result.push(second.shift());
  }

  return result;
};

console.log(recursion(arr));
