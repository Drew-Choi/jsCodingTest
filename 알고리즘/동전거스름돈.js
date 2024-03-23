const pay = 6000;

const solution = (pay) => {
  const moneys = [500, 100, 50, 10];
  let answer = {};
  let rest = pay;

  for (let money of moneys) {
    const ea = parseInt(rest / money, 10);

    if (ea > 0) {
      answer[money] = ea;
      rest = rest % money;
    } else {
      break;
    }
  }

  return answer;
};

console.log(solution(pay));
