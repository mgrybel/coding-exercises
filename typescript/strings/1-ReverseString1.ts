// Write a program to reverse a string
// Using a for loop

function reverseStringUsingLoop(str: string): string {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const reversedStringLoop = reverseStringUsingLoop('Hello, World!');
console.log(reversedStringLoop);
