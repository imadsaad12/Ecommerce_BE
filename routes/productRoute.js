const express = require('express');
const route = express.Router();
const {
  addproduct,
  getAllProducts,
  getProduct,
} = require('../controllers/productController');
const { validate } = require('express-validation');
const {
  addProductSchema,
  getProductSchema,
} = require('../validations/products');


route.post('/', validate(addProductSchema), addproduct);

route.get('/', getAllProducts);

route.get('/:id', validate(getProductSchema), getProduct);

module.exports = route;
