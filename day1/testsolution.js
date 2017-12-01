// test cases:
// 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
// 1111 produces 4 because each digit (all 1) matches the next.
// 1234 produces 0 because no digit matches the next.
// 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.

const stringToSum = '91212129';
let windowOfSum = 0;

stringToSum.split('').forEach((digit, index) => {
  let firstNumber = parseInt(digit);
  let secondNumber = 0;

  if (index === stringToSum.length - 1) {
    secondNumber = parseInt(stringToSum[0]);
  } else {
    secondNumber = parseInt(stringToSum[index + 1]);
  }

  if (firstNumber === secondNumber) {
    windowOfSum += firstNumber;
  }
});

console.log("here's the result", windowOfSum);
