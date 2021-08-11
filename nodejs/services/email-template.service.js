const EmailTemplateRepository = require('../repositories/email-template.repository');
const logger = require('../utils/logger.utils')('EmailTemplateService');

const EmailTemplateService = () => {
  const findByName = async (name) => {
    return await EmailTemplateRepository.findByName(name);
  };

  return {
    findByName,
  };
};

module.exports = EmailTemplateService();
