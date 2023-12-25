const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain(email) {
  const mailIndex = email.lastIndexOf('@');
  return email.slice(mailIndex + 1);
}

module.exports = {
  getEmailDomain
};
