const { incrementVersion } = require('../constants/mongodb.constants');
const invitationModel = require('../model/invitation.model');
const logger = require('../utils/logger.utils')('InvitationRepository');

const InvitationRepository = () => {
  const create = async (invitation) => {
    const invitationCreated = await invitationModel.create(invitation);
    logger.debugGroup('Invitation created', invitationCreated);
    return invitationCreated;
  };

  const accept = async (id, roles, invitationCode) => {
    return await invitationModel.findOneAndUpdate(
      { _id: id },
      {
        acceptationStatus: true,
        roles: roles,
        invitationCode,
        updateDate: new Date(),
        ...incrementVersion,
      },
      { useFindAndModify: false }
    );
  };

  const reject = async (id) => {
    return await invitationModel.findOneAndUpdate(
      { _id: id },
      {
        acceptationStatus: false,
        deleteDate: new Date(),
        ...incrementVersion,
      },
      { useFindAndModify: false }
    );
  };

  const findByInvitationCode = async (invitationCode) => {
    return await invitationModel.findOne({ invitationCode, deleteDate: null });
  };

  return {
    create,
    accept,
    reject,
    findByInvitationCode,
  };
};

module.exports = InvitationRepository();
