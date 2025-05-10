// Write a program that reads two words and concatenates them, displaying the resulting word.

const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for two words
const word1 = prompt('Enter the first word: ');
const word2 = prompt('Enter the second word: ');

const concatenatedWord = word1 + word2;

console.log('The concatenated word:', concatenatedWord);
