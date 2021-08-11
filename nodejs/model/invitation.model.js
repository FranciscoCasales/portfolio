const { Schema, model } = require('mongoose');
const auditScheme = require('./audit.model');

const invitationScheme = new Schema({
  email: {
    type: String,
    required: 'Email is required',
  },
  acceptationStatus: {
    type: Boolean,
    required: 'acceptation status is required',
  },
  roles: {
    type: [Schema.Types.ObjectId],
    required: 'Roles are required',
  },
  invitationCode: String,
  ...auditScheme,
});

module.exports = model('invitation', invitationScheme);
