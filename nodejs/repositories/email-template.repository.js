const emailTemplateModel = require('../model/email-template.model');
const logger = require('../utils/logger.utils')('EmailTemplateRepository');

const EmailTemplateRepository = () => {
  const findByName = async (name) => {
    return await emailTemplateModel.findOne({ name: name });
  };

  return { findByName };
};

module.exports = EmailTemplateRepository();
