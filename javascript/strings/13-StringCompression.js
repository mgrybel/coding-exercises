// `Implement a method to perform basic string compression
// using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.

const str = 'aabcccccaaa';
let compressionString = '';
let count = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    compressionString += str[i] + count;
    count = 1;
  }
}

console.log('Original string:', str);
console.log('Compressed string:', compressionString);
