const ready = 1200202;

const calculate = (ready) => {
  // 1200은 하루에 태운 사람 수
  // 총 배에 태운 일 수
  const days = ready / 1200;
  // 1일로 잡히지 못한 나머지 인원
  const restPoeple = ready % 1200;

  // 1년을 일수로 환산
  let oneYearDays = 0;
  for (let i = 1; i < 11; i++) {
    oneYearDays += 2 ** i;
  }

  // 몇년이 걸린지 체크
  //*
  const year = parseInt(days / oneYearDays, 10);
  // 년으로 묶은 후 남은 일 수들
  let yearRestDays = parseInt(days % oneYearDays, 10);

  // 몇 월인지 체크
  //*
  let month = 0;
  for (let i = 10; i > 0; i--) {
    month += 1;
    if (yearRestDays < 2 ** i) {
      break;
    }
    yearRestDays = yearRestDays - 2 ** i;
  }

  // 시간 구하기
  const shipStartMinuts = [25, 40, 55, 70, 85, 100];
  const hour = parseInt(restPoeple / 100 + 9, 10);
  let minuts = 0;

  // 인덱스만 출력
  for (let index in shipStartMinuts) {
    if (restPoeple % 100 < shipStartMinuts[index]) {
      minuts = index * 10;
      break;
    }
  }

  const dateMin = new Date().getMinutes();
  minuts = minuts + dateMin;

  if (minuts > 60) {
    minuts = minuts - 60;
    hour += 1;
  }

  return `
  ${2020 + year}년 ${month}월 ${yearRestDays}일 ${hour}시 ${minuts}분
  `;
};

console.log(calculate(ready));
