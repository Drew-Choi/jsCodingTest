// 4
// 2 3 1
// 5 2 4 1

// 10 +

// (5) -2- (2) -3- (4) -1- (1)

// 4
// 3 3 4
// 3 1 1 3

// 2 4

// 포인트 미리 계산거리를 바꾼다.!!!!!!!!!!
let city = [5, 2, 4, 7, 8];
const distance = [2, 3, 1, 2];

let minCost = city[0];
for (let i = 0; i < city.length; i += 1) {
  minCost = Math.min(minCost, city[i]);
  city[i] = minCost;
}

let price = 0;
for (let i = 0; i < city.length - 1; i += 1) {
  price += distance[i] * city[i];
}

console.log(price);

// let price = BigInt(0);
// let min = BigInt(1000000000);
// for (let i in distance) {
//   if (city[i] < min) {
//     min = city[i];
//     price += BigInt(distance[i]) * BigInt(min);
//   } else {
//     price += BigInt(distance[i]) * BigInt(min);
//   }
// }

// console.log(String(price));

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let n = Number(input[0]);
// let dist = input[1].split(' ').map(Number);
// let cost = input[2].split(' ').map(Number);
// // 주유 비용(cost) 배열의 값을 비오름차순이 되도록 변환 // [5, 2, 4, 1] -> [5, 2, 2, 1]
// let minCost = cost[0];
// for (let i = 0; i < n; i++) {
//   minCost = Math.min(minCost, cost[i]);
// cost[i] = minCost; }
// // 도로당 이동 비용의 합 계산
// let answer = BigInt(0);
// for (let i = 0; i < n - 1; i++) {
// // JavaScript에서 큰 정수를 처리할 때는 BigInt 사용
// answer += BigInt(dist[i]) * BigInt(cost[i]); }
// console.log(String(answer)); // 뒤에 붙는 'n' 제거
