// Write a program that takes a sentence and replaces all spaces with a new line.

const prompt = require('prompt-sync')({ sigint: true });

const sentence = prompt('Enter a sentence: ');
let replacedSentence = sentence.split(' ').join('\n');

console.log('Modified sentence:');
console.log(replacedSentence);
