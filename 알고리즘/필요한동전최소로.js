// const generateMoney = (number) => {
//   let result = [];
//   let pre = 0;
//   for (let i = 0; i < number; i += 1) {
//     if (i === 0) {
//       result.push(1);
//       pre = result[i];
//     } else {
//       if (i % 2 !== 0) {
//         result.push(pre * 5);
//         pre = result[i];
//       } else {
//         result.push(pre * 2);
//         pre = result[i];
//       }
//     }
//   }
//   return result;
// };

// // 그냥 함 화폐생성을 만들어봄
// const moneysList = generateMoney(10);
// const pay = 4200;

// const solution = (pay, moneysList) => {
//   console.log(moneysList);
//   let result = 0;
//   let rest = pay;

//   for (let money of moneysList) {
//     if (rest === 0) break;

//     result += parseInt(rest / money, 10);
//     rest = pay % money;
//   }

//   return result;
// };

// console.log(solution(pay, moneysList.reverse()));

let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

let arr = [];
// 전체 동전(화폐 단위) 데이터 입력
for (let i = n; i > 0; i -= 1) arr.push(Number(input[i]));

let result = 0;
let rest = k;

for (let money of arr) {
  if (rest === 0) break;

  result += parseInt(rest / money, 10);
  rest = rest % money;
}

console.log(result);
