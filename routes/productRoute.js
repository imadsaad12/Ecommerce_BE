const express = require('express');
// eslint-disable-next-line new-cap
const route = express.Router();
// eslint-disable-next-line max-len
const {
  addproduct,
  getAllProducts,
  getProduct,
} = require('../controllers/productController');
const validateSchema = require('../middlewares/ValidateSchema');
const {
  addProductSchema,
  getProductSchema,
} = require('../validations/products');

route.post('/', validateSchema(addProductSchema), addproduct);

route.get('/', getAllProducts);

route.get('/:id', validateSchema(getProductSchema), getProduct);

module.exports = route;
