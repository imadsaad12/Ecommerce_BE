const Products = require('../models/productModel');

const createProduct = async (data) => {
  await Products.create(data);
};

const allProducts = async () => await Products.find();

const getSingleProduct = async (id) => await Products.findById(id);

module.exports = {
  createProduct,
  allProducts,
  getSingleProduct,
};
