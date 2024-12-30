// Write a program that reads the price of a product.
// If the price is more than 200 USD, the tax is 5%.
// If the price is more than 500 USD, the tax is 7.5%.
// Products up to 200 USD do not pay taxes.
// Print the final price of the product on the screen.

const prompt = require('prompt-sync')({ sigint: true });

const price = parseFloat(prompt('Enter the price of the product: '));

let finalPrice;

// Calculate the final price based on different tax rates
if (price > 500) {
  finalPrice = price * 1.075; // 7.5% tax
} else if (price > 200) {
  finalPrice = price * 1.05; // 5% tax
} else {
  finalPrice = price; // no tax
}

// Display the final price of the product
console.log(`The final price of the product is ${finalPrice.toFixed(2)}`);
