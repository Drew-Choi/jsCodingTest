let fs = require("fs");
let input = fs.readFileSync("./회문.txt").toString().split("\n");

const palindromeCheck = (text) => {
  return text === text.split("").reverse().join("");
};

let tc = Number(input[0]);

for (let i = 1; i <= tc; i += 1) {
  let textData = input[i];

  if (palindromeCheck(textData)) {
    console.log(0);
  } else {
    let found = false;
    let textLength = textData.length;

    for (let i = 0; i < parseInt(textLength / 2, 10); i += 1) {
      if (textData[i] !== textData[textLength - 1 - i]) {
        if (
          palindromeCheck(
            textData.slice(0, i) + textData.slice(i + 1, textLength)
          )
        ) {
          found = true;
        }
        if (
          palindromeCheck(
            textData.slice(0, textLength - i - 1) +
              textData.slice(textLength - i, textLength)
          )
        ) {
          found = true;
        }
        break;
      }
    }
    if (found) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}
