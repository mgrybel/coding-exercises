// Write a program to reverse a string
// Using array methods: reverse, split and join

function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

const testStr = reverseString('Hello, world!');
console.log(testStr);
