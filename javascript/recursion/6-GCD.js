// Write a recursive function to find the greatest common divisor (GCD) of two numbers.

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

// Example usage
const number1 = 48;
const number2 = 18;
console.log(`GCD of ${number1} and ${number2} is:`, gcd(number1, number2)); // Expected output: 6
