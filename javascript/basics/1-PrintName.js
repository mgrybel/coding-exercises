// Write a program that asks for the user's name
// and prints the name on the screen immediately after.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Please enter your name: `, (name) => {
  console.log(`Hello, ${name}!`);
  readline.close();
});
