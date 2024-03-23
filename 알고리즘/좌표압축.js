// 1번 풀이
const arr = [2, 4, -10, 4, -9];

let newArr = [...new Set(arr)].sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < newArr.length; i += 1) {
  myMap.set(newArr[i], i);
}

let answer = "";
for (el of arr) {
  answer += myMap.get(el) + " ";
}

console.log("1: ", answer);

// 2번 풀이
let newArr2 = [...new Set(arr)]
  .sort((a, b) => a - b)
  .reduce((acc, cur, index) => {
    acc[cur] = index;

    return acc;
  }, {});

let answer2 = arr.map((el) => newArr2[el]).join(" ");
console.log("2: ", answer2);
