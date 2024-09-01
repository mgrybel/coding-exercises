// Write a program that receives a name and checks if it starts with the letter 'A'.

const prompt = require('prompt-sync')({ sigint: true });

const name = prompt('Enter a name: ');

if (name.charAt(0).toUpperCase() === 'A') {
  console.log(`${name} starts with the letter A.`);
} else {
  console.log(`${name} does not start with the letter A.`);
}
