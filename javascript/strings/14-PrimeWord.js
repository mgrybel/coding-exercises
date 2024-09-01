// Write an algorithm that checks whether a word is a "rawword".
// A word is considered a "prime word" if the sum of the letter values
// (where 'a' = 1, 'b' = 2, etc.) is a prime number.

const prompt = require('prompt-sync')({ sigint: true });

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function calculateLetterValue(char) {
  return char.toLowerCase().charCodeAt(0) - 96; // 'a' = 1, 'b' = 2, etc.
}

function isRawWord(word) {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += calculateLetterValue(word[i]);
  }

  return isPrime(sum);
}

const inputWord = prompt('Enter a word: ');
if (isRawWord(inputWord)) {
  console.log(`"${inputWord}" is a rawword.`);
} else {
  console.log(`"${inputWord}" is not a rawword.`);
}
