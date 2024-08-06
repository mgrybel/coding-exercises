// Write a program that prompts the user for a number N
// and displays all prime numbers less than N.

const prompt = require('prompt-sync')({ sigint: true });

const N = parseInt(prompt('Enter a number: '));

console.log(`Prime numbers less than ${N}:`);

// Loop to check and display prime numbers less than N
for (let number = 2; number < N; number++) {
  let isPrime = true;

  if (number === 2) {
    console.log(number);
    continue;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(number);
  }
}
