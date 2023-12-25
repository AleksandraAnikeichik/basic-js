const { NotImplementedError } = require('../extensions/index.js');

function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsNumber = 1 + 2 * (Math.pow(2, disksNumber - 1) - 1);
  const turnsTime = Math.floor(turnsNumber * 3600 / turnsSpeed);
  const result = {turns: turnsNumber, seconds: turnsTime};
  return result;
}

module.exports = {
  calculateHanoi
};
