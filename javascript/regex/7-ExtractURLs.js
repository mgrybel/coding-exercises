// Write a regex to extract all URLs from a text.

const text =
  'Visit our website at https://www.example.com or check out http://test.example.org/path/page.html';

const urlPattern = /https?:\/\/\S+/g;
const extractedURLs = text.match(urlPattern);

console.log(extractedURLs);
