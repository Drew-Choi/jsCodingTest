let text = "90+30-20+50-30+60-70+30+20";

// 1번 풀이
const result = text
  .split("-")
  .map((el) => {
    const plus = el.split("+");
    if (plus.length > 1) {
      return plus.reduce((acc, cur) => (acc += Number(cur)), 0);
    } else {
      return Number(plus[0]);
    }
  })
  .reduce((acc, cur, index) => (index === 0 ? (acc = cur) : (acc -= cur)), 0);

console.log(result);

// 2번 풀이
let groups = text.split("-");
let answer = 0;
for (let i = 0; i < groups.length; i++) {
  // 각 그룹 내부에서 덧셈(+) 연산 적용
  let cur = groups[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) answer += cur; // 첫 번째 그룹은 항상 덧셈(+)
  else answer -= cur; // 두 번째 그룹부터 뺄셈(-)
}
console.log(answer);
