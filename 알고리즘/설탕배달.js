// 이거 꼭 기억하기
// 작은걸 빼면서 가도 됨 5의 배수가 되도록만 만들어주면 됨

let kg = 21;
const packings = [5, 3];

const result = (kg) => {
  let rest = kg;
  let count = 0;
  let flag = false;

  while (rest >= 0) {
    if (rest === 0 || rest % 5 === 0) {
      count += parseInt(rest / 5, 10);
      flag = true;
      break;
    }
    rest -= 3;
    count += 1;
  }

  if (!flag) {
    count = -1;
  }

  return count;
};

console.log(result(kg));
