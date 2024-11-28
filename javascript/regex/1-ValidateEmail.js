// Write a regex to validate email addresses, ensuring it contains @ and . symbols.

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Example usage
const email1 = 'example@example.com';
const email2 = 'invalid.email';
console.log(`Email "${email1}" is valid:`, emailPattern.test(email1)); // Expected output: true
console.log(`Email "${email2}" is valid:`, emailPattern.test(email2)); // Expected output: false
