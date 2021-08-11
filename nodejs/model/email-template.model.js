const { Schema, model } = require('mongoose');
const auditScheme = require('./audit.model');

const emailTemplateScheme = new Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  template: {
    type: String,
    required: 'Template is required',
  },
  subject: {
    type: String,
    required: 'Subject is required',
  },
});

module.exports = model('email_template', emailTemplateScheme);
