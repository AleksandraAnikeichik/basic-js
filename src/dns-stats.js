const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
  let result = {};
  domains.forEach(domain => {
    let reversedDomainArray = domain.split('.').reverse(),
      cur_dns = '';
    reversedDomainArray.forEach(part => {
      cur_dns += '.' + part;
      result[cur_dns] = (result[cur_dns] || 0) + 1;
    })
  });
  return result;
}

module.exports = {
  getDNSStats
};
