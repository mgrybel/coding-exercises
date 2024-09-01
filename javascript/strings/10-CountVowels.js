// Write a program that reads a word and displays the number of vowels present in it.

const prompt = require('prompt-sync')({ sigint: true });

const word = prompt('Enter a word: ');
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;

for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word.charAt(i).toLowerCase())) {
    vowelCount++;
  }
}

console.log('The number of vowels:', vowelCount);
