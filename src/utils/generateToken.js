const crypto = require('crypto');

exports.generateToken = () => {
  const token = crypto.randomBytes(8).toString('hex');
  return {
    token,
  };
};
