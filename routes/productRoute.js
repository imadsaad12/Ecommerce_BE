const express = require('express');
// eslint-disable-next-line new-cap
const route = express.Router();
// eslint-disable-next-line max-len
const {addproduct, getAllProducts, getProduct} = require('../controllers/productController');

route.post('/', addproduct);

route.get('/', getAllProducts);

route.get('/:id', getProduct);

module.exports = route;
