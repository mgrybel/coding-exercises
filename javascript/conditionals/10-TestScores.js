// Write a program that reads the scores of two tests and checks if the student passed
// (score greater than or equal to 6) or failed (score less than 6) in each of the tests.

const prompt = require('prompt-sync')({ sigint: true });

const test1Score = parseFloat(prompt('Enter the score for test 1: '));
const test2Score = parseFloat(prompt('Enter the score for test 2: '));

if (test1Score >= 6) {
  console.log('The student passed test 1.');
} else {
  console.log('The student failed test 1.');
}

if (test2Score >= 6) {
  console.log('The student passed test 2.');
} else {
  console.log('The student failed test 2.');
}
