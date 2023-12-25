const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(n) {
  const arr = n.split('-');
  let regex = /[0-9A-Fa-f]{2}/;
  return arr.every(el => el.length < 3 && regex.test(el));
}
module.exports = {
  isMAC48Address
};
