let fs = require("fs");
let input = fs.readFileSync("./나무자르기.txt").toString().split("\n");

let target = Number(input[0].split(" ")[1]);
let array = input[1].split(" ").map(Number);

let start = 1;
let end = array.reduce((a, b) => Math.max(a, b));

const binarySearchRecursion = ({ start, end, target, array }) => {
  if (start > end) return end;

  let mid = parseInt((start + end) / 2, 10);

  let getItem = array.reduce(
    (acc, height) => (acc += height > mid ? height - mid : 0),
    0
  );

  if (getItem < target)
    return binarySearchRecursion({ start, end: mid - 1, target, array });

  return binarySearchRecursion({ start: mid + 1, end, target, array });
};

console.log(binarySearchRecursion({ start, end, target, array }));

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let n = Number(input[0].split(' ')[0]); // 나무의 수(N)
// let m = Number(input[0].split(' ')[1]); // 가져갈 나무의 길이(M) let arr = input[1].split(' ').map(Number); // 각 나무의 높이
// let start = 0; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정 let end = arr.reduce((a, b) => Math.max(a, b));
// let result = 0;
// while (start <= end) { // 이진 탐색 수행(반복문)
// let mid = parseInt((start + end) / 2); // 현재의 중간점(높이)
// let total = 0; // mid로 잘랐을 때 얻을 수 있는 나무의 양 계산
// for (x of arr) if (x > mid) total += x - mid;
// if (total < m) end = mid - 1; // 나무의 양이 부족한 경우 더 많이 자르기(높이 줄이기) else { // 나무의 양이 충분한 경우 덜 자르기(높이 키우기)
// result = mid; // 최대한 덜 잘랐을 때가 정답이므로, result에 기록
// start = mid + 1; }
// }
// console.log(result);
