const { config } = require('../config');
const { getErrorStatus, getErrorMessage } = require('../utils/error.utils');
const { red, yellow } = require('chalk');
const { error } = require('../utils/logger.utils')('ErrorMiddleware');

const errorLogger = (err, req, res, next) => {
  error(`Error in Api with path ${req.url}`, err.message, err.stack);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  res
    .status(getErrorStatus(err))
    .json({ errors: getErrorMessage(err), message: err.message });
};

module.exports = {
  errorLogger,
  errorHandler,
};
