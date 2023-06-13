const express = require('express');
const route = express.Router();
const {
  addproduct,
  getAllProducts,
  getProduct,
} = require('../controllers/productController');
const { validate } = require('express-validation');
const { addProductSchema } = require('../validations/products/addProduct');
const { tryCatch } = require('../utils/errors');

route.post('/', tryCatch(validate(addProductSchema)), addproduct);

route.get('/', getAllProducts);

route.get('/:id', getProduct);

module.exports = route;
