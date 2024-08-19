// Write a program that reads a word and checks if it is a palindrome
// (if it can be read backwords the same way).
// palindrome examples: Madam, civic, deed, Kayak, level, pop, Hannah, Anna, mom
// use toLowerCase() function to ignore the case in e.g. Hannah

const prompt = require('prompt-sync')({ sigint: true });

const word = prompt('Enter a word: ').toLowerCase();
const reversedWord = word.toLowerCase().split('').reverse().join('');

if (word === reversedWord) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word} is not a palindrome.`);
}
