const Product = require('../models/productModel');

const addProduct = async (data) => {
  const product = new Product(data);
  await product.save();
};

const allProducts = async () => {
  const products = await Product.find();
  return products;
};

const getProduct = async (id) => {
  const product = await Product.findById(id);
  return product;
};

module.exports = {
  addProduct,
  allProducts,
  getProduct,
};
