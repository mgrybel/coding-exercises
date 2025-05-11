// Write a program that takes a word and displays each letter separately.

const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for a word
const word = prompt('Enter a word: ');

const letters = word.split('');

console.log('Letters separated:');
for (const letter of letters) {
  console.log(letter);
}
