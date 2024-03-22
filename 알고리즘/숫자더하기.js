let number = "1231233";

const recursion = (number) => {
  if (number.length === 1) return parseInt(number, 10);

  return (
    recursion(number.slice(0, number.length - 1)) +
    parseInt(number[number.length - 1], 10)
  );
};

console.log(recursion(number));
