// Write a program that reads the scores of two tests, calculate the simple
// arithmetic mean, and checks if the student passed (average greater than
// or equal to 6) or failed (average less than 6).

const prompt = require('prompt-sync')({ sigint: true });

const test1Score = parseFloat(prompt('Enter the score for test 1: '));
const test2Score = parseFloat(prompt('Enter the score for test 2: '));

const average = (test1Score + test2Score) / 2;

// Check if the student passed and display the average score
if (average >= 6) {
  console.log(`The student passed. The average score: ${average}.`);
} else {
  console.log(`The student failed. The average score: ${average}.`);
}
