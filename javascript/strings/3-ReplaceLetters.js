// Create a program that takes a sentence
// and replaces all the letters "a" with "e".

const prompt = require('prompt-sync')({ sigint: true });

const sentence = prompt('Enter a sentence: ');
let replacedSentence = '';

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === 'a') {
    replacedSentence += 'e';
  } else {
    replacedSentence += sentence[i];
  }
}

console.log('Modified sentence: ', replacedSentence);
