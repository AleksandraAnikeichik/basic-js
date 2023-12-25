const { NotImplementedError } = require('../extensions/index.js');

function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    date.getTime();
  } catch (error) {
    throw new TypeError('Invalid date!');
  }
  let season;
  const month = date.getMonth();
  switch (month) {
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'autumn';
      break; 
    default:
      season = 'winter';
      break;
  }
  return season;
}

module.exports = {
  getSeason
};
