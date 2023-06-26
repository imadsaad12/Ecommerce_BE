const express = require('express');
const route = express.Router();
const {
  addproduct,
  getAllProducts,
  getProduct,
  deleteP,
  updateP,
} = require('../controllers/productController');
const { validate } = require('express-validation');
const {
  addProductSchema,
  getProductSchema,
  deleteProductSchema,
  updateProductSchema,
} = require('../validations/products');


route.post('/', validate(addProductSchema), addproduct);

route.get('/', getAllProducts);

route.get('/:id', validate(getProductSchema), getProduct);

route.delete('/delete/:id', validate(deleteProductSchema), deleteP);

route.put('/update/:id', validate(updateProductSchema), updateP);

module.exports = route;
