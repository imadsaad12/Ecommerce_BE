const {makeError} = require('../utils/errors');

const validateSchema = (schema) => (req, res, next) => {
  const {error} = schema.validate(req, {
    allowUnknown: false,
    abortEarly: false,
  });
  if (error) {
    return res.send(makeError(error.message, error.statusCode));
  }
  next();
};

module.exports = validateSchema;
