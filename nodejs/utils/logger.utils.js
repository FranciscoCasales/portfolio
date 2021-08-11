const { bgRed, red, bgBlue, blue, bgWhite, whiteBright } = require('chalk');
const { config } = require('../config');

const logger = (fileName) => {
  const appName = `Portfolio 👻 [${fileName}]`;

  const error = (title = 'Unexpected error', ...errors) => {
    console.group(bgRed.bold(`${appName}[ERROR]: ${title}`));
    errors.forEach((e) => console.error(red(validateLog(e))));
    console.groupEnd();
  };

  const info = (title = '', ...logs) => {
    console.group(bgBlue.blackBright.bold(`${appName}[INFO]: ${title}`));
    logs.forEach((l) => console.info(blue(JSON.stringify(validateLog(l)))));
    console.groupEnd();
  };

  const debugGroup = (title = '', ...logs) => {
    if (config.dev) {
      console.group(bgWhite.blackBright.bold(`${appName}[DEBUG]: ${title}`));
      logs.forEach((l) => console.debug(whiteBright(validateLog(l))));
      console.groupEnd();
    }
  };

  const debug = (...logs) => {
    if (config.dev) {
      console.group(bgWhite.blackBright.bold(`${appName}[DEBUG]:`));
      logs.forEach((l) => console.debug(whiteBright(validateLog(l))));
      console.groupEnd();
    }
  };

  function validateLog(log) {
    return log instanceof Object ? JSON.stringify(log) : log;
  }

  return {
    error,
    info,
    debug,
    debugGroup,
  };
};

module.exports = logger;
