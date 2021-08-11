const UserRepository = require('../repositories/user.repository');

const UserService = () => {
  const create = async (user) => {
    return await UserRepository.create(user);
  };

  const updateProfileImage = async (id, imagePath) => {
    return await UserRepository.updateProfileImage(id, imagePath);
  };

  const exist = () => {};

  const update = (user) => {};

  const inactivate = (id) => {};

  const login = (user, pass) => {};

  const findByEmail = async (email) => {
    // TODO: validations
    return await UserRepository.findByEmail(email);
  };

  return {
    create,
    updateProfileImage,
    findByEmail,
  };
};

module.exports = UserService();
