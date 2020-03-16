import joi from "@hapi/joi";

const option = joi
  .string()
  .optional()
  .allow("");

export const master = joi.object().keys({
  city: option,
  theme: option
});
