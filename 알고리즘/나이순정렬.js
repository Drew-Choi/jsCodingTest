let arr = [
  {
    name: "Junkyu",
    age: 21,
  },
  { name: "Dohyun", age: 21 },
  { name: "Sunyoung", age: 20 },
];

// sort는 안정정렬로 순서가 같다면 먼저 들어온걸 기준으로 먼저 배치
const newArr = arr.sort((a, b) => {
  if (a.age !== b.age) return a.age - b.age;
});

console.log(newArr);

//1번 풀이
let ex = [..."999999879999"];

ex.sort((a, b) => b - a);

console.log(ex.join(""));
// 124ms 9332kb

//2번 풀이
let ex2 = "999999879999";
let sample = Array(10).fill(0);

for (el of ex2) {
  sample[Number(el)] += 1;
}

let answer = "";
for (let i = 9; i >= 0; i -= 1) {
  for (let repeat = 0; repeat < sample[i]; repeat += 1) {
    answer += String(i);
  }
}
console.log(answer);
