// Write a recursive function to determine whether a word is a palindrome.

// Palindrome is a word, phrase, or sequence that reads the same backwards as forwards,
// e.g. 'madam' or 'nurses run'.

function isPalindrome(word) {
  if (word.length <= 1) {
    return true;
  } else {
    if (word[0] === word[word.length - 1]) {
      return isPalindrome(word.substring(1, word.length - 1));
    } else {
      return false;
    }
  }
}

// Example usage
const word1 = 'racecar';
const word2 = 'hello';
console.log(`${word1} is a palindrome:`, isPalindrome(word1)); // Expected output: true
console.log(`${word2} is a palindrome:`, isPalindrome(word2)); // Expected output: false
