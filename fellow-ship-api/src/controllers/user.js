const { validateBody } = require("../services/validation");
const { createUserService } = require("../services/userService");

export const getMasters = async ({ params }, res, next) => {
  // const { theme, city } = params;
  // const masters = await mGetMasters({ city });
  res.send("getMasters is working.");
};

export const createUser = async (req, res, next) => {
  validateBody(req.body);
  try {
    const createdUser = await createUserService(req.body);
    res.status(201).send({
      email: createdUser.email,
      username: createdUser.username,
      lastname: createdUser.lastname,
      firstname: createdUser.firstname,
      dateOfBirth: createdUser.dateOfBirth,
      gender: createdUser.gender,
      picture: createdUser.picture,
      description: createdUser.description,
      role: createdUser.role,
      location: createdUser.location,
      availability: createdUser.availability,
      grade: createdUser.grade,
      level: createdUser.level,
      rate: createdUser.rate
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
