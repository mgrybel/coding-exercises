// Validate and extract currency values from a text (e.g., $100.25).

const text = 'The total amount is $100.25 and $50.50 for other items';

const currencyPattern = /\$\d+(\.\d{1,2})?/g;
const currencyValues = text.match(currencyPattern);

console.log(currencyValues);
