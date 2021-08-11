const ERROR_TYPE_STATUS = new Map([['ValidationError', 400]]);

const ERROR_TYPE_MESSAGE_PATH = new Map([
  ['ValidationError', ['error', 'errors']],
]);

const REQ_URL_ERROR_MESSAGE = new Map([
  ['/invitation/@POST', ['Invitation already requested', 406]],
  [
    '/invitation/accept@PATCH',
    ["Invitation doesn't exist or is in a invalid status", 406],
  ],
  [
    '/invitation/accept@PATCH',
    ["Invitation doesn't exist or is in a invalid status", 406],
  ],
]);

module.exports = {
  ERROR_TYPE_STATUS,
  ERROR_TYPE_MESSAGE_PATH,
  REQ_URL_ERROR_MESSAGE,
};
