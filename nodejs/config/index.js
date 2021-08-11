require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASS,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
  authAdminPassword: process.env.AUTH_ADMIN_PASS,
  authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
  adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,
  emailPort: process.env.EMAIL_PORT,
  emailHost: process.env.EMAIL_HOST,
  emailAuthUser: process.env.EMAIL_AUTH_USER,
  emailAuthPass: process.env.EMAIL_AUTH_PASS,
  ownerEmail: process.env.OWNER_EMAIL,
  awsS3Path: process.env.AWS_S3_PATH,
  awsS3Bucket: process.env.AWS_S3_BUCKET,
  awsS3Region: process.env.AWS_S3_REGION,
};

module.exports = { config };
