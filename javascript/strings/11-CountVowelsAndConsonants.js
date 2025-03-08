// Write a program that reads a word and displays the number of vowels and consonants present in it.

const prompt = require('prompt-sync')({ sigint: true });

const word = prompt('Enter a word: ');
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < word.length; i++) {
  const currentChar = word.charAt(i).toLowerCase();

  if (vowels.includes(currentChar)) {
    vowelCount++;
  } else if (currentChar >= 'a' && currentChar <= 'z') {
    consonantCount++;
  }
}

console.log('The number of vowels:', vowelCount);
console.log('The number of consonants:', consonantCount);
