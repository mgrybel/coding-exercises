// Write a program that takes a full name and displays the last name first.

const prompt = require('prompt-sync')({ sigint: true });

const fullName = prompt('Enter your full name: ');
const namesArray = fullName.split(' ');
const lastName = namesArray[namesArray.length - 1];
const firstName = namesArray[0];

console.log(`${lastName} ${firstName}`);
