const crypto = require('crypto');

function generateUniqId(len, type = 'HEX') {
  return crypto.randomBytes(len).toString(type).toUpperCase();
}

module.exports = {
  generateUniqId
}