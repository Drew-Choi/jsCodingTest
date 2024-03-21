let arr = [5, 10, 66, 77, 54, 32, 11, 15];
const arrLength = arr.length;
let newArr = [];

const findIndex = (newArr, value) => {
  for (let index in newArr) {
    if (value < newArr[index]) {
      return index;
    }
  }
  return newArr.length;
};

for (let i = 0; i < arrLength; i += 1) {
  let insert = arr.shift();
  let insertIndex = findIndex(newArr, insert);

  newArr.splice(insertIndex, 0, insert);
}

console.log(newArr);
