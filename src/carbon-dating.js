const { NotImplementedError } = require('../extensions/index.js');
const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string' || isNaN(parseInt(sampleActivity)) || +sampleActivity <= 0) return false;
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / k);
  if (t <= 0) return false;
  return t;
}

module.exports = {
  dateSample
};
