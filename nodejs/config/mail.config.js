const nodemailer = require('nodemailer');
const { config } = require('.');

const transporter = nodemailer.createTransport({
  port: config.emailPort,
  host: config.emailHost,
  auth: {
    user: config.emailAuthUser,
    pass: config.emailAuthPass,
  },
  secure: true,
  connectionTimeout: 5000,
});

module.exports = transporter;
