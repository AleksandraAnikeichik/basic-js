const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
  const additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(String(str) + additionStr).join(separator);
}
module.exports = {
  repeater
};
