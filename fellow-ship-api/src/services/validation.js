export const validateBody = schema => ({ body }, res, next) => {
  const { error } = schema.validate(body);
  if (error) {
    next(error);
  } else {
    next();
  }
};
export const validateParams = schema => ({ params }, res, next) => {
  const { error } = schema.validate(params);
  if (error) {
    next(error);
  } else {
    next();
  }
};

export default schema => (req, res, next) => {
  const { error } = schema.validate(req);
  if (error) {
    next(error);
  } else {
    next();
  }
};
