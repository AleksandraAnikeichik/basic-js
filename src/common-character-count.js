const { NotImplementedError } = require('../extensions/index.js');

function getCommonCharacterCount(s1, s2) {
  const map = new Map();
  const map2 = new Map();
  let commonCount = 0;

  for (const char of s1) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (const char of s2) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (map2.has(key)) {
      commonCount += Math.min(value, map2.get(key));
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
