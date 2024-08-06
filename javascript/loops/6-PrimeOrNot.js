// Write a program that asks the user for a number N
// and checks whether the number is prime or not.

const prompt = require('prompt-sync')({ sigint: true });

const N = parseInt(prompt('Enter a number: '));

let isPrime = true;

// Check if the number is prime
if (N <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(`${N} is a prime number.`);
} else {
  console.log(`${N} is not a prime number`);
}
