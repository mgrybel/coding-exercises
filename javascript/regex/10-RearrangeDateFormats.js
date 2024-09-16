// Use capture groups to rearrange date formats (convert YYYY-MM-DD to DD-MM-YYYY).

const dateString = '2023-10-25';
const pattern = /(\d{4})-(\d{2})-(\d{2})/g;

const rearrangedDate = dateString.replace(pattern, '$3-$2-$1');

console.log(rearrangedDate); // Output: 25-10-2023
