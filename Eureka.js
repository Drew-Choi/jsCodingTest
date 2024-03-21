let cross = [
  [
    [3, 0, 1, 1, 8],
    [5, 0, 4, 5, 4],
    [1, 5, 0, 5, 1],
    [1, 2, 1, 0, 1],
    [0, 2, 5, 1, 1],
  ],

  [
    [1, 2, 0, 3, 3],
    [1, 2, 0, 2, 4],
    [1, 2, 0, 2, 4],
    [4, 2, 0, 0, 1],
    [8, 4, 1, 1, 0],
  ],
];

cross = cross.flat();

const sampleCorss = [
  [3, 0, 1, 1, 8],
  [5, 0, 4, 5, 4],
  [1, 5, 0, 5, 1],
  [1, 2, 1, 0, 1],
  [0, 2, 5, 1, 1],
];
let 가중치누적값 = Array(5)
  .fill(0)
  .map(() => Array(5).fill(0));

for (let i = 0; i < sampleCorss.length; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    if (i === 0 && j === 0) {
      가중치누적값[0][0] = sampleCorss[0][0];
    } else if (i === 0) {
      가중치누적값[i][j] = 가중치누적값[i][j - 1] + sampleCorss[i][j];
    } else if (j === 0) {
      가중치누적값[i][j] = 가중치누적값[i - 1][j] + sampleCorss[i][j];
    } else {
      가중치누적값[i][j] =
        Math.min(가중치누적값[i][j - 1], 가중치누적값[i - 1][j]) +
        sampleCorss[i][j];
    }
  }
}

let 좌표저장 = Array(5)
  .fill(0)
  .map(() =>
    Array(5)
      .fill(0)
      .map(() => Array(2).fill(0))
  );

for (let i = 0; i < sampleCorss.length; i += 1) {
  for (let j = 0; j < 5; j += 1) {
    if (i === 0 && j === 0) {
      가중치누적값[0][0] = sampleCorss[0][0];
      좌표저장[0][0][0] = i;
      좌표저장[0][0][1] = j;
    } else if (i === 0) {
      가중치누적값[i][j] = 가중치누적값[i][j - 1] + sampleCorss[i][j];
      좌표저장[i][j][0] = i;
      좌표저장[i][j][1] = j - 1;
    } else if (j === 0) {
      가중치누적값[i][j] = 가중치누적값[i - 1][j] + sampleCorss[i][j];
      좌표저장[i][j][0] = i - 1;
      좌표저장[i][j][1] = j;
    } else {
      if (가중치누적값[i][j - 1] > 가중치누적값[i - 1][j]) {
        가중치누적값[i][j] = 가중치누적값[i - 1][j] + sampleCorss[i][j];
        좌표저장[i][j][0] = i - 1;
        좌표저장[i][j][1] = j;
      } else {
        가중치누적값[i][j] = 가중치누적값[i][j - 1] + sampleCorss[i][j];
        좌표저장[i][j][0] = i;
        좌표저장[i][j][1] = j - 1;
      }
      // 가중치누적값[i][j] =
      //   Math.min(가중치누적값[i][j - 1], 가중치누적값[i - 1][j]) +
      //   sampleCorss[i][j];
    }
  }
}

let 가중치누적값2 = Array(cross.length)
  .fill(0)
  .map(() => Array(5).fill(0));

let 좌표저장2 = Array(cross.length)
  .fill(0)
  .map(() =>
    Array(5)
      .fill(0)
      .map(() => Array(2).fill(0))
  );

// 반대로 내려옴
for (let i = 0; i < cross.length; i += 1) {
  for (let j = 4; j > -1; j -= 1) {
    if (i === 0 && j === 4) {
      가중치누적값2[0][4] = cross[0][4];
      좌표저장2[0][4][0] = 99;
      좌표저장2[0][4][1] = 99;
    } else if (i === 0) {
      가중치누적값2[i][j] = 가중치누적값2[i][j + 1] + cross[i][j];
      좌표저장2[i][j][0] = i;
      좌표저장2[i][j][1] = j + 1;
    } else if (j === 4) {
      가중치누적값2[i][j] = 가중치누적값2[i - 1][j] + cross[i][j];
      좌표저장2[i][j][0] = i - 1;
      좌표저장2[i][j][1] = j;
    } else {
      if (가중치누적값2[i][j + 1] > 가중치누적값2[i - 1][j]) {
        가중치누적값2[i][j] = 가중치누적값2[i - 1][j] + cross[i][j];
        좌표저장2[i][j][0] = i - 1;
        좌표저장2[i][j][1] = j;
      } else {
        가중치누적값2[i][j] = 가중치누적값2[i][j + 1] + cross[i][j];
        좌표저장2[i][j][0] = i;
        좌표저장2[i][j][1] = j + 1;
      }
      // 가중치누적값[i][j] =
      //   Math.min(가중치누적값[i][j - 1], 가중치누적값[i - 1][j]) +
      //   sampleCorss[i][j];
    }
  }
}

console.log("2", 가중치누적값2);

console.log("2-1", 좌표저장2);

let i_ = 0;
let j_ = 0;
for (let k = 0; k < 100; k += 1) {
  if (k === 0) {
    i_ = 좌표저장2[cross.length - 1][0][0];
    j_ = 좌표저장2[cross.length - 1][0][1];
  } else {
    i_ = 좌표저장2[i_][j_][0];
    j_ = 좌표저장2[i_][j_][1];
  }
  if (i_ === 99 || j_ === 99) {
    break;
  }
  console.log("a", i_);
  console.log("b", j_);
}
