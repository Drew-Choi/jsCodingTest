let x = "drewchoi";

// 재귀 x
let result = "";

while (true) {
  if (x.length === 1) {
    result += x;
    break;
  }

  let y = x.split("");
  result += y.pop();
  x = y.join("");
}

// 재귀
const recursion = (string) => {
  if (string.length === 1) return string;

  return (
    string[string.length - 1] + recursion(string.slice(0, string.length - 1))
  );
};

console.log(recursion("drewchoi"));
