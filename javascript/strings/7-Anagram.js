// Write a program that reads two words and checks if
// the second word is an anagram of the first.

// Anagram examples: dusty=study, state=taste, cider=cried,
// arc=car, bored=robed, peach=cheap

const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for two words
const word1 = prompt('Enter the first word: ');
const word2 = prompt('Enter the second word: ');

// Convert both words to lowercase and remove whitespace
const sortedWord1 = word1.toLowerCase().split('').sort().join('');
const sortedWord2 = word2.toLowerCase().split('').sort().join('');

if (sortedWord1 === sortedWord2) {
  console.log(`${word2} is an anagram of ${word1}`);
} else {
  console.log(`${word2} is not an anagram of ${word1}`);
}
