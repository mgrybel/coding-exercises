// Implement a recursive function to calculate
// the Fibonacci sequence up to a given number.

function fibonacci(n, sequence = [0, 1]) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return sequence;
  } else {
    const nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (nextNumber <= n) {
      sequence.push(nextNumber);
      return fibonacci(n, sequence);
    } else {
      return sequence;
    }
  }
}

// Example usage
const number = 50;
console.log('The Fibonacci sequence up to', number, 'is:', fibonacci(number));
