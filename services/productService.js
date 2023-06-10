const Products = require('../models/productModel');

const createProduct = async (data) => Products.create(data);

const allProducts = async () => Products.find();

const getSingleProduct = async (id) => Products.findById(id);

module.exports = {
  createProduct,
  allProducts,
  getSingleProduct,
};
