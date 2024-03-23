const n = 5;
let minuts = [3, 1, 4, 3, 2];

minuts.sort((a, b) => a - b);

// 1번 풀이
const result = minuts.reduce(
  (acc, el) => {
    acc.sum += el;
    acc.total += acc.sum;

    return acc;
  },
  { sum: 0, total: 0 }
);

console.log(result.total);

// 2번 풀이
// let answer = 0;
// let summary = 0;
// for (let i = 0; i < n; i++) {
// summary += minuts[i]; // i번째 사람이 기다린 총 시간
// answer += summary; // 지금까지 소요된 총 시간 }
// console.log(answer);
