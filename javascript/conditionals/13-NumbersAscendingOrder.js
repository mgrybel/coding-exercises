// Write a program that reads three numbers and displays them in ascending order.

const prompt = require('prompt-sync')({ sigint: true });

const number1 = parseFloat(prompt('Enter the first number: '));
const number2 = parseFloat(prompt('Enter the second number: '));
const number3 = parseFloat(prompt('Enter the third number: '));

let smallest, middle, largest;

if (number1 <= number2 && number1 <= number3) {
  smallest = number1;

  if (number2 <= number2) {
    middle = number2;
    largest = number3;
  } else {
    middle = number3;
    largest = number2;
  }
} else if (number2 <= number1 && number2 <= number3) {
  smallest = number2;

  if (number1 <= number3) {
    middle = number1;
    largest = number3;
  } else {
    middle = number3;
    largest = number1;
  }
} else {
  smallest = number3;

  if (number1 <= number2) {
    middle = number1;
    largest = number2;
  } else {
    middle = number2;
    largest = number1;
  }
}

// Display the result
console.log(
  `The numbers in ascending order: ${smallest}, ${middle}, ${largest}.`
);
