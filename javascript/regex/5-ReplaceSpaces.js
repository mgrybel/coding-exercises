// Replace multiple spaces in a text with a single space.

const text = 'This     is     an     example     text.';
const newText = text.replace(/\s+/g, ' ');
console.log(newText);
