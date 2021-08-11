const InvitationRepository = require('../repositories/invitation.repository');
const EmailService = require('./email.service');
const {
  INVITATION_REQUEST,
  REQUEST_ACCEPTED,
} = require('../constants/email.constants');
const { config } = require('../config');
const { generateCode } = require('../utils/code.utils');
const logger = require('../utils/logger.utils')('InvitationService');

const InvitationService = () => {
  const request = async ({ email }) => {
    const invitation = {
      email,
      acceptationStatus: false,
      entryDate: new Date(),
    };
    const invitationCreated = await InvitationRepository.create(invitation);
    const emailParams = new Map([
      ['email', email],
      ['objectId', invitationCreated._id],
    ]);
    EmailService.send(INVITATION_REQUEST, config.ownerEmail, emailParams);
    logger.debugGroup('invitationCreated', invitationCreated);
  };

  const accept = async ({ invitationId, roles }) => {
    const code = await generateCode();
    const invitation = await InvitationRepository.accept(
      invitationId,
      roles,
      code
    );
    const emailParams = new Map([
      ['email', invitation.email],
      ['code', code],
    ]);
    EmailService.send(REQUEST_ACCEPTED, invitation.email, emailParams);
    logger.debugGroup('Accepted invitation', invitation);
    return invitation;
  };

  const reject = async ({ invitationId }) => {
    return await InvitationRepository.reject(invitationId);
  };

  const validate = async (invitationId) => {
    const invitation = await InvitationRepository.findByInvitationCode(
      invitationId
    );
    return invitation;
  };

  return {
    request,
    accept,
    reject,
    validate,
  };
};

module.exports = InvitationService();
