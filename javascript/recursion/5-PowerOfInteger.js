// Write a recursive function to calculate the power of an integer raised to an exponent.

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

// Example usage
const base = 3;
const exp = 4;
console.log(`${base} raised to the power of ${exp} is:`, power(base, exp)); // Expected output: 81
