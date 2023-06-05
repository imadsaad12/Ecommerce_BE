const Product = require('../models/productModel');

const addProduct = async (data) => {
    const product = new Product(data);

    await product.save();
    
}

module.exports = {
    addProduct
}