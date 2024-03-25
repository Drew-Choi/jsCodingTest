const arr = [1, [2], [3, [[4]]]];

const arrayFlat = (arr) => {
  const newArr = arr.flat();
  return newArr.some(Array.isArray) ? arrayFlat(newArr) : newArr;
};

console.log(arrayFlat(arr));
