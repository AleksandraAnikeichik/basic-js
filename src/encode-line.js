const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  str = str.split('');
  let count = 1;
  let code = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i]==str[i+1]) {
      count = count + 1;
    } else {
      if (count == 1) {
        code.push(str[i]);
      count = 1;
      } else {
        code.push(count);
        code.push(str[i]);
        count = 1;
      }
    }
  }
  return code.join('')
}

module.exports = {
  encodeLine
};
