// Write a program that asks the user for a number
// and checks whether the number is prime or not.

const prompt = require('prompt-sync')({ sigint: true });

const number = parseInt(prompt('Enter a number: '));

let isPrime = true;

// Check if the number is prime
if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

// Display the result
if (isPrime) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number`);
}
