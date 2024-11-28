// Given a list of strings, write a function to determine the longest common prefix.

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix.charAt(j) === strs[i].charAt(j)
    ) {
      j++;
    }
    prefix = prefix.slice(0, j);
    if (prefix === '') {
      return '';
    }
  }
  return prefix;
}

// Example usage
const strings = ['flower', 'flow', 'flight'];
const commonPrefix = longestCommonPrefix(strings);
console.log('The longest common prefix:', commonPrefix);
