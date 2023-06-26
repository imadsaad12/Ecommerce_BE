const Products = require('../models/productModel');

const createProduct = async (data) => Products.create(data);

const allProducts = async () => Products.find();

const getSingleProduct = async (id) => Products.findById(id);

const deleteProduct = async (id) => Products.findOneAndDelete(id);

const updateProduct = async (id, data) => Products.findOneAndUpdate({ id: id },
  {
    $set: {
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      size: data.size,
      image: data.image
    }
  },
);

module.exports = {
  createProduct,
  allProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
