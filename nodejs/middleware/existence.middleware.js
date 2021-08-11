const {
  REQ_URL_TO_MODEL_PATH,
  REQ_URL_TO_QUERY,
} = require('../constants/mongodb.constants');
const PortfolioError = require('../utils/portfolio-error.utils');
const { REQ_URL_ERROR_MESSAGE } = require('../constants/error.constants');
const logger = require('../utils/logger.utils')('ExistenceMiddleware');

const validateNonexistence = async (req, res, next) => {
  try {
    const composeUrl = `${req.baseUrl}${req.url}@${req.method}`;
    const register = await findOne(composeUrl, req.body);
    if (register) {
      logger.debugGroup('Register found', register);
      const error = REQ_URL_ERROR_MESSAGE.get(composeUrl);
      next(new PortfolioError(error[1], 'ExistenceMiddleware', error[0]));
    }
    next();
  } catch (e) {
    next(e);
  }
};

const validateExistence = async (req, res, next) => {
  try {
    const composeUrl = `${req.baseUrl}${req.url}@${req.method}`;
    const register = await findOne(composeUrl, req.body);
    if (!register) {
      const error = REQ_URL_ERROR_MESSAGE.get(composeUrl);
      next(new PortfolioError(error[1], 'ExistenceMiddleware', error[0]));
    }
    logger.debugGroup('Register found', register);
    next();
  } catch (e) {
    next(e);
  }
};

const findOne = async (composeUrl, body) => {
  const path = REQ_URL_TO_MODEL_PATH.get(composeUrl) || '';
  const model = await require(path);
  const query = REQ_URL_TO_QUERY.get(composeUrl)(body);
  return await model.findOne(query);
};

module.exports = {
  validateExistence,
  validateNonexistence,
};
