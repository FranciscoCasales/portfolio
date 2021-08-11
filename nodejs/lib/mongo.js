const { connect, connection } = require('mongoose');
const { config } = require('../config');

const configureMongo = async () => {
  try {
    connection.on('connecting', function () {
      console.log('connecting to Mongo...');
    });

    connection.on('error', function (error) {
      console.error('Error in MongoDb connection: ' + error);
      mongoose.disconnect();
    });
    connection.on('connected', function () {
      console.log('MongoDB connected!');
    });
    connection.once('open', function () {
      console.log('MongoDB connection opened!');
    });
    connection.on('reconnected', function () {
      console.log('MongoDB reconnected!');
    });
    connection.on('disconnected', function () {
      console.log('MongoDB disconnected!');
      // mongoose.connect(dbURI, {server:{auto_reconnect:true}});
    });
    await connect(
      `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = configureMongo;
