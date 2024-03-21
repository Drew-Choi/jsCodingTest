// for문으로 공부했으나, reduce로 가능할거 같아 바꿔봄
let first = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1],
];

let second = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4],
  [0, 2, 0, 0, 2],
  [4, 5, 0, 2, 0],
];

// let sample = [];

// for (let i = 0; i < first.length; i += 1) {
//   sample[i] = new Array(first[0].length);
// }

// console.log(sample);

// for (let i = 0; i < second.length; i += 1) {
//   for (let x = 0; x < second[0].length; x += 1) {
//     sample[i][x] = second[x][second[0].length - 1 - i] + first[i][x];
//   }
// }

// console.log(sample);

let sample = new Array(second[0].length).fill(
  new Array(second.length).fill(null)
);

const reverse = sample.reduce(
  (acc, cur, index) => {
    acc.xlength = second[0].length;

    const newArr = cur.map(
      (_, secondIndex) =>
        second[secondIndex][acc.xlength - 1 - index] + first[index][secondIndex]
    );

    acc.result += String.fromCharCode(parseInt(newArr.join(""), 8));

    return acc;
  },
  { result: "", xlength: 0 }
).result;

console.log(reverse);
