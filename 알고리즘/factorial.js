// 이슈 재귀함수는 콜택이 날 수 있다.

const factorialRecursiveBigInt = (number) => {
  let result = BigInt(1); // 초기값을 BigInt로 설정
  for (let i = 1; i <= number; i++) {
    result *= BigInt(i); // 반복문 내의 모든 숫자를 BigInt로 변환
  }
  return result;
};

const solutionBigInt = (n) => {
  // 팩토리얼 숫자 구하기 -> 문자열로 변환하기 전에 BigInt 사용
  const factorialNumber = factorialRecursiveBigInt(BigInt(n)).toString(); // BigInt 결과를 문자열로 변환

  // 나머지 로직은 동일하며, BigInt에 영향을 받지 않음
  let answer = 0;
  for (let i = factorialNumber.length - 1; i >= 0; i -= 1) {
    if (factorialNumber[i] === "0") {
      answer += 1;
    } else {
      break;
    }
  }
  return answer;
};

console.log(solutionBigInt(100000000)); // 이런 큰 숫자는 실제로 실행하지 않는 것이 좋음
