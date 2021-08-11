const express = require('express');
const UserService = require('../services/user.service');
const router = express.Router();

router.post('/login', async (req, res, next) => {
  try {
    await UserService.create({});
    res.send('Success');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
