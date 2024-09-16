// Extract all hex color codes from a text (e.g., #AABBCC or #ABC).

const text = 'The colors #AABBCC and #123 are commonly used in design';

const hexColorPattern = /#[0-9A-Fa-f]{3,6}\b/g;
const extractedColors = text.match(hexColorPattern);

console.log(extractedColors);
