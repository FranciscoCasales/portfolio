const UserModel = require('../model/user.model');

const UserRepository = () => {
  const create = async (user) => {
    return await UserModel.create(user);
  };

  const updateProfileImage = async (id, imagePath) => {
    return await UserModel.findOneAndUpdate(
      { _id: id },
      { profileImage: imagePath }
    );
  };

  const findByEmail = async (email) => {
    return await UserModel.findOne({ email });
  };

  return {
    create,
    updateProfileImage,
    findByEmail,
  };
};

module.exports = UserRepository();
