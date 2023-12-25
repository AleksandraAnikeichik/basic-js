const { NotImplementedError } = require('../extensions/index.js');

function getSumOfDigits(n) {
  while (n >= 10) {
    const digit1 = Math.floor(n / 100); 
    const digit2 = Math.floor((n % 100) / 10);
    const digit3 = n % 10;
    n = digit1 + digit2 + digit3;
}
return n;
}

module.exports = {
  getSumOfDigits
};
