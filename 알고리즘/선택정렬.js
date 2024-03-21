let arr = [10, 11, 9, 2, 3, 4, 6, 5];

const length = arr.length;

let newArr = [];

for (let i = 0; i < length; i += 1) {
  const minNumber = Math.min.apply(null, arr);
  const minNumberIndex = arr.indexOf(minNumber);
  newArr.push(minNumber);

  arr.splice(minNumberIndex, 1);
}

console.log("ㅁ", newArr);
