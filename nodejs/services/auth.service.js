const FunctionService = require('./function.service');
const { unauthorized } = require('../utils/error.utils').errors('AuthService');
const { signToken } = require('../utils/auth/jwt.utils');
const invitationService = require('./invitation.service');
const userService = require('./user.service');
const bcrypt = require('bcrypt');
const { saveImage } = require('../utils/s3.utils');
const userRepository = require('../repositories/user.repository');
const logger = require('../utils/logger.utils')('AuthService');
const { config } = require('../config');

const AuthService = () => {
  const signIn = async (error, user) => {
    if (error) {
      throw unauthorized(error.message);
    }

    const functions = await FunctionService.findByRoles(
      user.roles.map((role) => role.roleId)
    );

    if (!functions || !functions.length) {
      throw unauthorized('Insufficient permits');
    }

    const { _id: sub, name, username, email } = user;

    const payload = {
      sub,
      name,
      username,
      email,
      scopes: functions.map((fn) => fn.name),
    };

    return signToken(payload, { expiresIn: '1d' });
  };

  const singUp = async ({
    invitationCode,
    username,
    password,
    profileImage,
  }) => {
    const invitation = await invitationService.validate(invitationCode);
    
    logger.debug(invitationCode, username, password, invitation);
    if (invitation && invitation.acceptationStatus) {
      const user = {
        username,
        password: await bcrypt.hash(password, 10),
        email: invitation.email,
        roles: invitation.roles,
        entryDate: new Date(),
      };
      let createdUser = await userService.create(user);
      if (createdUser?.id && profileImage?.body) {
        saveImage(
          createdUser._id,
          'profile',
          profileImage.type,
          profileImage.body
        );
        createdUser = userRepository.updateProfileImage(
          createdUser._id,
          `${config.awsS3Path}${createdUser._id}/profile.${profileImage.type}`
        );
      }
      createdUser.password = undefined;
      logger.debug(createdUser);
      return createdUser;
    } else {
      throw unauthorized('Bad invitation');
    }
  };

  return {
    signIn,
    singUp,
  };
};

module.exports = AuthService();
