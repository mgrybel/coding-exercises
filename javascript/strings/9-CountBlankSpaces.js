// Write a program that receives a sentence and displays the amount of blank spaces present in it.

const prompt = require('prompt-sync')({ sigint: true });

// Prompt the user for a sentence
const sentence = prompt('Enter a sentence: ');

let spaceCount = 0;

for (let i = 0; i < sentence.length; i++) {
  if (sentence.charAt(i) === ' ') {
    spaceCount++;
  }
}

console.log('The number of blank spaces:', spaceCount);
