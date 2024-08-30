// Write a program that displays even numbers from 1 to 50 and odd numbers from 51 to 100 using a repeating loop.

for (let number = 1; number <= 100; number++) {
  if (number <= 50) {
    if (number % 2 === 0) {
      console.log(`Even number: ${number}`);
    }
  } else {
    if (number % 2 !== 0) {
      console.log(`Odd number: ${number}`);
    }
  }
}
