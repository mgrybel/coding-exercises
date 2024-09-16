// Extract all valid IPv4 addresses from a text.

const text =
  'The IP addresses are 192.168.0.1 and 10.0.0.1, but not 999.888.777.666 or 256.256.256.256.';

const ipv4Pattern = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
const extractedIPs = text.match(ipv4Pattern);

console.log(extractedIPs);
