// Extract all valid dates from a string in the format YYYY-MM-DD or DD/MM/YYYY.

const dateString =
  'Some text with dates: 2024-01-17, 12/10/2022, 05/06/1997, 1999-13-45';

const datePattern = /\b\d{4}-\d{2}-\d{2}\b|\b\d{2}\/\d{2}\/\d{4}\b/g;
const validDates = dateString.match(datePattern);

console.log('Valid dates found:', validDates);
