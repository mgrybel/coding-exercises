// Write a program that asks for a user's name
// and prints the name on the screen immediately after.

const prompt = require('prompt-sync')({ sigint: true });

const name = prompt('Enter your name: ');
console.log(`Hello, ${name}!`);
