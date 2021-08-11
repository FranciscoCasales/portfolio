const jwt = require('jsonwebtoken');
const { config } = require('../../config');

const JwtUtils = () => {
  const secret = config.authJwtSecret;

  const signToken = (payload, options) => {
    return jwt.sign(payload, secret, options);
  };

  const verifyToken = (token) => {
    return jwt.verify(token, secret);
  };

  return {
    signToken,
    verifyToken,
  };
};

module.exports = JwtUtils();
