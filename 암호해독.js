// 코딩테스트 시작
let data = [
  "   + -- + - + -   ",
  "   + --- + - +   ",
  "   + -- + - + -   ",
  "   + - + - + - +   ",
];

const translateCode = (code) => {
  let result = "";

  for (let el of code) {
    result += String.fromCharCode(
      parseInt(el.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2)
    );
  }

  return result;
};

const result = translateCode(data);
console.log(result);
