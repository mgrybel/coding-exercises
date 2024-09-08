// Write a recursive function to find the greatest common divisor (GCD) of two numbers.

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

// Example usage
const num1 = 48;
const num2 = 18;
console.log(`GCD of ${num1} and ${num2} is:`, gcd(num1, num2)); // Expected output: 6
