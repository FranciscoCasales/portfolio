const crypto = require('crypto');

const generateCode = async () => {
  return crypto.randomBytes(10).toString('hex');
};

module.exports = {
  generateCode,
};
