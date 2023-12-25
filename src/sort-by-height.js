const { NotImplementedError } = require('../extensions/index.js');

function sortByHeight(arr) {
  const arrWithoutOnes = arr.filter((element) => element !== -1 ).sort((a, b) => a - b);
  const result = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(arrWithoutOnes[j]);
      j++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
