const { Schema, model } = require('mongoose');
const auditScheme = require('./audit.model');

const functionScheme = new Schema({
  name: {
    type: String,
    required: 'Name is required',
  },
  desc: {
    type: String,
    required: 'Description is required',
  },
  allowedRoles: {
    type: [Schema.Types.ObjectId],
    required: 'Allowed roles are required',
  },
  ...auditScheme,
});

module.exports = model('function', functionScheme);
