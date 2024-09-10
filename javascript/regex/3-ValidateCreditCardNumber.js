// check if a given string is a valid credit card number
// (typically 16 digits, sometimes separated by - or spaces).

function isValidCreditCardNumber(str) {
  // Remove dashes and spaces
  const cleanStr = str.replace(/-|\s/g, '');

  // Check if the string is 16 digits and contains only numbers
  const creditCardPattern = /^\d{16}$/;

  return creditCardPattern.test(cleanStr);
}

// Example usage
const cardNumber1 = '1234-5678-9012-3456';
const cardNumber2 = '1234567890123456';
const cardNumber3 = '123456789012345'; // Invalid length

console.log(
  `"${cardNumber1}" is a valid credit card number:`,
  isValidCreditCardNumber(cardNumber1)
); // Expected output: true
console.log(
  `"${cardNumber2}" is a valid credit card number:`,
  isValidCreditCardNumber(cardNumber2)
); // Expected output: true
console.log(
  `"${cardNumber3}" is a valid credit card number:`,
  isValidCreditCardNumber(cardNumber3)
); // Expected output: false
