const aws = require('aws-sdk');
const { config } = require('../config');
aws.config.update({ region: config.awsS3Region });
const s3 = new aws.S3();

const listBuckets = () => {
  s3.listBuckets((err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
};

const listObject = () => {
  const bucketParams = {
    Bucket: 'portfolio-jcasales',
  };
  return new Promise((resolve, reject) => {
    s3.listObjects(bucketParams, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const saveImage = (path, imageName, imageType, body) => {
  const bucketParams = {
    Bucket: config.awsS3Bucket,
    Key: `${path}/${imageName}.${imageType}`,
    Body: body,
  };
  return new Promise((resolve, reject) => {
    s3.upload(bucketParams, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getObject = () => {
  const bucketParams = {
    Bucket: 'portfolio-jcasales',
    Key: '60e6158ae05f655d0508bb08/profile/nest.svg',
  };
  return new Promise((resolve, reject) => {
    s3.getObject(bucketParams, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = {
  listBuckets,
  listObject,
  saveImage,
  getObject,
};
