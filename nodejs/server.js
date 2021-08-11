const express = require('express');
const routes = require('./routes');
const configureMongo = require('./lib/mongo');
const cookieParser = require('cookie-parser');
const { errorLogger, errorHandler } = require('./middleware/error.middleware');
const app = express();

app.use(express.json());
app.use(cookieParser());
configureMongo();
routes(app);

// Error handler
app.use(errorLogger);
app.use(errorHandler);

const server = app.listen(3000, () => {
  console.log(`App listen in port ${server.address().port}`);
});
