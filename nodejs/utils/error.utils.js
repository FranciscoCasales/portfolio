const PortfolioError = require('./portfolio-error.utils');
const {
  ERROR_TYPE_STATUS,
  ERROR_TYPE_MESSAGE_PATH,
} = require('../constants/error.constants');

const getErrorStatus = (err) => {
  return err.status || ERROR_TYPE_STATUS.get(err.name) || 500;
};

const getErrorMessage = (err) => {
  const errorPath = ERROR_TYPE_MESSAGE_PATH.get(err.name) || [];
  const errorMessage =
    errorPath && errorPath.length
      ? errorPath.reduce((_, curr) => err[curr])
      : err.message;
  return errorMessage;
};

const errors = (file) => {
  const unauthorized = (message) => {
    return new PortfolioError(401, file, message || 'Unauthorized');
  };

  const unacceptable = (message) => {
    return new PortfolioError(406, file, message || 'Unacceptable');
  };

  return {
    unauthorized,
    unacceptable,
  };
};

module.exports = {
  getErrorStatus,
  getErrorMessage,
  errors,
};
