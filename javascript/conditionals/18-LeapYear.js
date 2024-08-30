// Write a program that reads a year (a four digit number) and checks whether it is a leap year or not.

const prompt = require('prompt-sync')({ sigint: true });

const year = parseInt(prompt('Enter a four-digit year: '));

let isLeapYear = false;

// Check if the year is a leap year
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  isLeapYear = true;
}

if (isLeapYear) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
