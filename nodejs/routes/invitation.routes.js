const express = require('express');
const {
  validateExistence,
  validateNonexistence,
} = require('../middleware/existence.middleware');
const InvitationService = require('../services/invitation.service');
const router = express.Router();
const logger = require('../utils/logger.utils')('InvitationRoutes');

router
  .post('/', validateNonexistence, async (req, res, next) => {
    try {
      await InvitationService.request(req.body);
      res.send('Success');
    } catch (err) {
      next(err);
    }
  })
  .patch('/accept', validateExistence, async (req, res, next) => {
    try {
      const invitation = await InvitationService.accept(req.body);
      res.send(invitation);
    } catch (err) {
      next(err);
    }
  })
  .patch('/reject', validateExistence, async (req, res, next) => {
    try {
      const invitation = await InvitationService.reject(req.body);
      res.send(invitation);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
