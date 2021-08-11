const { Schema, model } = require('mongoose');
const auditScheme = require('./audit.model');

const userScheme = new Schema({
  username: {
    type: String,
    required: 'Username is required',
  },
  email: {
    type: String,
    required: 'Email is required',
  },
  name: String,
  lastName: String,
  profileImage: String,
  password: {
    type: String,
    required: 'Password is required',
  },
  roles: {
    type: [
      {
        roleId: Schema.Types.ObjectId,
        roleName: String,
      },
    ],
    required: 'Roles are required',
  },
  ...auditScheme,
});

module.exports = model('USER', userScheme);
