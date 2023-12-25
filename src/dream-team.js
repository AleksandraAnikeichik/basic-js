const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false; 
  }
  let result = [];
  const filterMembers = members.filter(el => typeof el === 'string');
  if (filterMembers.length === 0) {
    return false; 
  }
  filterMembers.forEach(el => {
    result.push(el.trim()[0].toUpperCase());
  });
  return result.sort().join('');
}

module.exports = {
  createDreamTeam
};
