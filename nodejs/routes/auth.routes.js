const express = require('express');
const passport = require('passport');
const authService = require('../services/auth.service');
const { unauthorized, unacceptable } = require('../utils/error.utils').errors(
  'AuthRoutes'
);
const AuthService = require('../services/auth.service');
const logger = require('../utils/logger.utils');

require('../utils/auth/basicAuth.utils');

const router = express.Router();

router
  .post('/sign-in', async (req, res, next) => {
    passport.authenticate('basic', (error, user) => {
      if (error || !user) {
        next(unauthorized());
      }
      req.login(user, { session: false }, async (err) => {
        try {
          const token = await AuthService.signIn(err, user);
          user.roles = undefined;
          res.cookie('authorization', token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            secure: false,
            httpOnly: true,
          });
          res.status(200).json({ user });
        } catch (e) {
          next(unauthorized(e.message));
        }
      });
    })(req, res, next);
  })
  .post('/sign-up', async (req, res, next) => {
    try {
      const body = req.body;
      if (body.username && body.password && body.invitationCode) {
        const createdUser = await authService.singUp(body);
        res.status(200).send(createdUser);
      } else {
        next(unacceptable('Incomplete data'));
      }
    } catch (e) {
      next(e);
    }
  });

module.exports = router;
