const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  const result = matrix.map((element) => count(element)).reduce((a, b) => a + b);
  return result;
}
function count(array) {
  const result = array.filter((element) => element === '^^').length;
  return result;
}

module.exports = {
  countCats
};
