const Joi = require('joi');

const addProductSchema = {
  body: Joi.object({
    size: Joi.number().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().required(),
  }),
};

const getProductSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
};

module.exports = {
  addProductSchema,
  getProductSchema,
};
