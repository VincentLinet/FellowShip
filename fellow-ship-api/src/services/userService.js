const bcrypt = require("bcryptjs");
const User = require("../models/user");

export const createUserService = async (params) => {
  return new Promise(async (resolve, reject) => {
    const existingEmail = await User.findOne({ email: params.email });
    if (existingEmail) {
      reject('Email already exists in database.');
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPwd = await bcrypt.hash(params.password, salt);
      let user = new User({
        email: params.email,
        password: hashedPwd,
        username: params.username,
        lastname: params.lastname,
        firstname: params.firstname,
        dateOfBirth: params.dateOfBirth,
        gender: params.gender,
        picture: params.picture,
        description: params.description
      });

      user.save().then(createdUser => {
        resolve(createdUser);
      }).catch(error => {
        reject(error);
      });
    }
  });
};
