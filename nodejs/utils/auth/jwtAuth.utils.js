const passport = require('passport');
const { Strategy } = require('passport-jwt');
const { config } = require('../../config');
const logger = require('../../utils/logger.utils')('JwtAuth');

const extractFromCookie = (req) => {
  return req && req.cookies ? req.cookies.authorization : undefined;
};

passport.use(
  new Strategy({
    secretOrKey: config.authJwtSecret,
    jwtFromRequest: extractFromCookie(),
  }),
  async (tokenPayload, done) => {
    try {
      logger.debugGroup('token payload', tokenPayload);
    } catch (e) {
      logger.error('Auth error', e);
    }
  }
);
