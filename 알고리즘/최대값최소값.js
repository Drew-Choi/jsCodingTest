const arr = [10, 20, 30, 1, 2, 3, 5, 9.11];

console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));

let m = arr[0];
for (let el of arr) {
  if (el > m) {
    m = el;
  }
}

console.log(m);

const reduceM = arr.reduce((acc, cur) => (acc > cur ? acc : cur));

console.log("aa", reduceM);
