const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {
  let arr = String(n);
  let max = [];
      for (let i = 0; i < arr.length; i++) {
        max.push(arr.slice(0, i).concat(arr.slice(i+1)));
      }
      return Number(max.sort()[max.length - 1])
}

module.exports = {
  deleteDigit
};
