// Write a program that reads three numbers and displays them in ascending order.

const prompt = require('prompt-sync')({ sigint: true });

const num1 = parseFloat(prompt('Enter the first number: '));
const num2 = parseFloat(prompt('Enter the second number: '));
const num3 = parseFloat(prompt('Enter the third number: '));

let smallest, middle, largest;

if (num1 <= num2 && num1 <= num3) {
  smallest = num1;

  if (num2 <= num2) {
    middle = num2;
    largest = num3;
  } else {
    middle = num3;
    largest = num2;
  }
} else if (num2 <= num1 && num2 <= num3) {
  smallest = num2;

  if (num1 <= num3) {
    middle = num1;
    largest = num3;
  } else {
    middle = num3;
    largest = num1;
  }
} else {
  smallest = num3;

  if (num1 <= num2) {
    middle = num1;
    largest = num2;
  } else {
    middle = num2;
    largest = num1;
  }
}

// Display the result
console.log(
  `The numbers in ascending order: ${smallest}, ${middle}, ${largest}.`
);
