const express = require('express');
// eslint-disable-next-line new-cap
const route = express.Router();
// eslint-disable-next-line max-len
const {
  addproduct,
  getAllProducts,
  getProduct,
} = require('../controllers/productController');
// const validateSchema = require('../middlewares/ValidateSchema');
const { addProductSchema } = require('../validations/products/addProduct');

route.post('/', addproduct);

route.get('/', getAllProducts);

route.get('/:id', getProduct);

module.exports = route;
