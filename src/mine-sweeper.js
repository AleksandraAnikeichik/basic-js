const { NotImplementedError } = require('../extensions/index.js');

function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
    for (let j = 0; j < columns; j++) {
      let count = 0;

      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < rows && y >= 0 && y < columns && !(x === i && y === j)) {
            if (matrix[x][y] === true) {
              count++;
            }
          }
        }
      }
      result[i].push(count);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
