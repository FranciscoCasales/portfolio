const transporter = require('../config/mail.config');
const EmailTemplateService = require('./email-template.service');
const logger = require('../utils/logger.utils')('EmailService');

const EmailService = () => {
  const send = async (templateName, to, params) => {
    const emailTemplate = await EmailTemplateService.findByName(templateName);
    const html = fillTemplateParams(emailTemplate.template, params);
    const mailData = {
      from: 'jose.casalesh@gmail.com',
      to,
      subject: emailTemplate.subject,
      html,
    };
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        logger.error('Error sending email', err);
      } else {
        logger.info('Email send successfully', info.messageId);
      }
    });
  };

  const sendCode = () => {};

  const fillTemplateParams = (template, params) => {
    if (params && params.size) {
      params.forEach((v, k) => {
        template = template.replace('${' + k + '}', v);
      });
    }
    return template;
  };

  return {
    send,
  };
};

module.exports = EmailService();
