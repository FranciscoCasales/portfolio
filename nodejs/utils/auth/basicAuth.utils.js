const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const bcrypt = require('bcrypt');

const { unauthorized } = require('../../utils/error.utils').errors('Auth');
const UserService = require('../../services/user.service');
const logger = require('../logger.utils')('BasicAuth');

passport.use(
  new BasicStrategy(async (email, password, done) => {
    try {
      const user = await UserService.findByEmail(email);
      logger.debugGroup('User', user);
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return done(unauthorized(), false);
      }
      user.password = undefined;
      logger.debugGroup('User', user);
      done(null, user);
    } catch (e) {
      done(unauthorized(e.message), false);
    }
  })
);
