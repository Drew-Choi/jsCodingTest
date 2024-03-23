// 역으로 추론 하고, +1되는 것과 2로 나뉘는 것을 구분

let A = 2;
let B = 162;

let result = 1;
let flag = false;
while (A <= B) {
  if (A === B) {
    flag = true;
    break;
  }

  if (B % 2 === 0) {
    B = parseInt(B / 2, 10);
  } else if (B % 10 === 1) {
    B = parseInt(B / 10, 10);
  } else {
    break;
  }

  result += 1;
}

if (flag) {
  console.log(result);
} else {
  console.log(-1);
}
