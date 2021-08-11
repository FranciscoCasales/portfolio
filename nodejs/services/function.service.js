const FunctionRepository = require('../repositories/function.repository');
const logger = require('../utils/logger.utils')('FunctionService');

const FunctionService = () => {
  const findByRoles = async (roles) => {
    return await FunctionRepository.findByRoles(roles);
  };

  return {
    findByRoles,
  };
};

module.exports = FunctionService();
