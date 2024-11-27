// Write a recursive function to calculate the sum of the digits of an integer.

function sumOfDigits(n) {
  if (n < 10) {
    return n;
  } else {
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
  }
}

// Example usage
const number = 12345;
console.log('The sum of digits:', sumOfDigits(number)); // Expected output: 15
