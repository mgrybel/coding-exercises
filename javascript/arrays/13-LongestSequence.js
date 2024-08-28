// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a list of integers separated by spaces: ');
const nums = input.split(' ').map((v) => parseInt(v, 10));

// const nums = input.split(' ').map(Number);
// with map(Number), there is a conversion error and
// it returns consecutive sequence of 1 even if we don't enter any integers
// Enter a list of integers separated by spaces: 1

if (nums.length === 0) {
  console.log(`The length of the longest consecutive sequence: 0`);
} else {
  const numSet = new Set(nums);
  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  console.log(`Length of the longest consecutive sequence: ${longestSequence}`);
}
