// Write a program that asks for a person's height and weight
// and calculates their BMI (Body Mass Index),
// displaying the corresponding category
// (underweight, normal weight, overweight, obese, severy obese).

const prompt = require('prompt-sync')({ sigint: true });

const height = parseFloat(prompt('Enter your height in centimeters (cm): '));
const weight = parseFloat(prompt('Enter your weight in kilograms (kg): '));

// Calculate the BMI
const bmi = (weight / height / height) * 10000;

console.log(`BMI is ${bmi}`);

let category;

if (bmi < 18.5) {
  category = 'Underweight';
} else if (bmi < 24.9) {
  category = 'Normal weight';
} else if (bmi < 29.9) {
  category = 'Overweight';
} else if (bmi < 34.9) {
  category = 'Obese';
} else {
  category = 'Severely obese';
}

console.log(`Your BMI is ${bmi.toFixed(2)} - ${category}`);
