page = [
  "척추동물",
  "어류",
  "척추동물",
  "무척추동물",
  "파충류",
  "척추동물",
  "어류",
  "파충류",
];

// 포인트 히트되지 않고 오래된게 앞으로 밀리고, 모두 히트가 되었다면, 가장 오래된게 앞으로 밀림.
// 결국 맨 앞에 꺼만 교체를 해주면되는 구조임.

/*
 1회 : ['척추동물'] #false 1분
 2회 : ['척추동물','어류'] #false 1분
 3회: ['어류', '척추동물'] #true 1초
 4회: ['어류', '척추동물', '무척추동물'] #false 1분
 5회: ['척추동물', '무척추동물', '파충류'] #false 1분
 6회: ['무척추동물', '파충류', '척추동물'] #true 1초
 7회: ['파충류', '척추동물', '어류'] #false 1분
 8회: ['척추동물', '어류', '파충류',] #true 1초
*/

const solution = (pages, chair) => {
  let seat = [];
  let resultTime = 0;

  for (let el of pages) {
    const inHere = seat.indexOf(el);

    if (seat.length < chair) {
      if (inHere !== -1) {
        seat.splice(inHere, 1);
        seat.push(el);
        resultTime += 1;
      } else {
        seat.push(el);
        resultTime += 60;
      }
    } else {
      if (inHere !== -1) {
        seat.splice(inHere, 1);
        seat.push(el);
        resultTime += 1;
      } else {
        seat.shift();
        seat.push(el);
        resultTime += 60;
      }
    }
  }

  return `${parseInt(resultTime / 60, 10)}분 ${resultTime % 60}초`;
};

console.log(solution(page, 3));
