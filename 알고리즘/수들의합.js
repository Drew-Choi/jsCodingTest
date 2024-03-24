// 작은 수들을 더해가면서
// S를 초과하게 되는 그 이전의 값이 가장 큰 값이 된다.
// 초과되기 위해 1번 더 돌기 때문에
// 같더라도 초과를 만들어줌. 그래야 최종적으로 -1을 통일있게 해줌
let S = 190;

let sum = 0;
let current = 0;
while (sum <= S) {
  current += 1;
  sum += current;
}
console.log(current - 1);
