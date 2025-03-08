// Implement a recursive function to calculate the Fibonacci sequence up to a given number.

/**
 * The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * The next number is found by adding up the two numbers before it: the 2
 * is found by adding the two numbers before it (1+1),;
 * the 3 is found by adding the two numbers before it (1+2),; the 5 is (2+3),; and so on.
 */

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
