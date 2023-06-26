const Joi = require('joi');

const signupSchema = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const signinSchema = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
module.exports = {
  signupSchema,
  signinSchema,
};
