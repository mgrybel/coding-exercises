// Write a program that reads the age of three people and
// checks how many of them are of legal age (age 18 or older).

const prompt = require('prompt-sync')({ sigint: true });

const age1 = parseInt(prompt('Enter the age of the first person: '));
const age2 = parseInt(prompt('Enter the age of the second person: '));
const age3 = parseInt(prompt('Enter the age of the third person: '));

// Count how many people are of legal age
let legalAgeCount = 0;

if (age1 >= 18) {
  legalAgeCount++;
}

if (age2 >= 18) {
  legalAgeCount++;
}

if (age3 >= 18) {
  legalAgeCount++;
}

// Display the number of people of legal age
console.log(`The number of people of legal age is ${legalAgeCount}`);
