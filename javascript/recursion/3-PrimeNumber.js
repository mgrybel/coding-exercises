// Create a recursive function to check if a number is prime.

function isPrime(num, divisor = 2) {
  if (num <= 2) {
    return n === 2;
  }

  if (num % divisor === 0) {
    return num === divisor;
  }

  if (divisor * divisor > num) {
    return true;
  }

  return isPrime(num, divisor + 1);
}

// Example usage
const number = 17;
console.log(`Is ${number} prime?`, isPrime(number)); // Expected output: true
