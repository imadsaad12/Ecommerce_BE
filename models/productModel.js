const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
    {timestamps: true},
);

const Products = mongoose.model('product', productsSchema);

module.exports = Products;
