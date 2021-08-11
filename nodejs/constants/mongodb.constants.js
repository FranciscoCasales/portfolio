const incrementVersion = { $inc: { __v: 1 } };

const REQ_URL_TO_MODEL_PATH = new Map([
  ['/invitation/@POST', '../model/invitation.model'],
  ['/invitation/accept@PATCH', '../model/invitation.model'],
  ['/invitation/reject@PATCH', '../model/invitation.model'],
]);

const REQ_URL_TO_QUERY = new Map([
  ['/invitation/@POST', (body) => ({ email: body.email })],
  [
    '/invitation/accept@PATCH',
    (body) => ({
      _id: body.invitationId,
      acceptationStatus: false,
      deleteDate: null,
    }),
  ],
  [
    '/invitation/reject@PATCH',
    (body) => ({ _id: body.invitationId, deleteDate: null }),
  ],
]);

module.exports = { incrementVersion, REQ_URL_TO_MODEL_PATH, REQ_URL_TO_QUERY };
