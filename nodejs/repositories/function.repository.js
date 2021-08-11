const { incrementVersion } = require('../constants/mongodb.constants');
const functionModel = require('../model/function.model');
const logger = require('../utils/logger.utils')('functionRepository');

const FunctionRepository = () => {
  const findByRoles = async (roles) => {
    return await functionModel.find({ allowedRoles: { $in: [...roles] } });
  };

  return { findByRoles };
};

module.exports = FunctionRepository();
