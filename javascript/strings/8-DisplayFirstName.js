// Write a program that takes a full name and
// displays only the first name.

const prompt = require('prompt-sync')({ sigint: true });

const fullName = prompt('Enter your full name: ');
const firstName = fullName.split(' ')[0];

console.log('First name:', firstName);
