let number = "1231233";

const factorial = (number) => {
  if (number.length === 1) return parseInt(number, 10);

  return (
    factorial(number.slice(0, number.length - 1)) +
    parseInt(number[number.length - 1], 10)
  );
};

console.log(factorial(number));
