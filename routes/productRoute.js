const express = require('express');
// eslint-disable-next-line new-cap
const route = express.Router();
const productController = require('../controllers/productController');

route.post('/add', productController.addproduct);

route.get('/', productController.getAllProducts);

route.get('/:id', productController.getProduct);

module.exports = route;
