// 재귀함수 사례 - 2진수 변환
// 2   11   1
// 2   5    1
// 2   2    0
//     1

let result = "";
let x = 11;

while (true) {
  if (x % 2 === 0) {
    result += "0";
  } else {
    result += "1";
  }

  x = Math.floor(x / 2);

  if (x === 1 || x === 0) {
    result += String(x);
    break;
  }
}

// console.log(result.split("").reverse().join(""));

//재귀표현

const factorial = (n) => {
  if (n === 1 || n === 0) return String(n);

  return factorial(Math.floor(n / 2)) + String(n % 2);
};

console.log("2222:", factorial(11));
