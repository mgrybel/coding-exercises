// Write a recursive function to reverse a string.

function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// Example usage
const string = 'Hello, world!';
console.log('The original string:', string);
console.log('Reversed string:', reverseString(string)); // Expected output: !dlrow ,olleH
