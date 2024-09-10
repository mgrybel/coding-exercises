// Validate passwords to ensure they contain at least
// one uppercase character, one lowercase character, one digit,
// one special character, and are at least 8 characters long.

function validatePassword(password) {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return passwordPattern.test(password);
}

// Example usage
const password1 = 'Passw0rd!';
const password2 = 'password';

console.log(`"${password1}" is a valid password:`, validatePassword(password1)); // Expected output: true
console.log(`"${password2}" is a valid password:`, validatePassword(password2)); // Expected output: false