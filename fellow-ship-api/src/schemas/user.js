const joi = require("@hapi/joi");

const option = joi
  .string()
  .optional()
  .allow("");

export const masters = joi.object().keys({
  city: option,
  theme: option
});

export const register = joi.object().keys({
  email: joi.string().required().email(),
  password: joi.string().min(6).required(),
  repeat_password: joi.ref('password'),
  username: joi.string().required(),
  lastname: joi.string().required(),
  firstname: joi.string().required(),
  dateOfBirth: option,
  gender: joi.number().integer().required(),
  picture: option,
  description: option
});
