// Write a program that asks for a person's age and checks whether
// they are a child (0-12 years old), a teenager (13-17), an adult (18 - 59),
// or an elderly (60 years old and older), using logical operators,
// without if, else, etc.

const prompt = require('prompt-sync')({ sigint: true });

const age = parseInt(prompt('Enter your age: '));

// Check the age range using logical operators
const isChild = age >= 0 && age <= 12;
const isTeenager = age >= 13 && age <= 17;
const isAdult = age >= 18 && age <= 59;
const isElderly = age >= 60;

console.log(
  isChild
    ? 'You are a child.'
    : isTeenager
    ? 'You are a teenager.'
    : isAdult
    ? 'You are an adult'
    : isElderly
    ? 'You are an elderly'
    : 'Invalid age entered.'
);
