const serviceProduct = require('../services/productService');

const addproduct = async (req, res) => {
  const data = req.body;
  try {
    await serviceProduct.addProduct(data);
    return res.status(200).send('Product added successfully');
  } catch (error) {
    return res.status(400);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await serviceProduct.allProducts();
    if (!products) {
      return res.status(404).send('No products available');
    } else {
      return res.json(products);
    }
  } catch (error) {
    return res.status(400);
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await serviceProduct.getProduct(id);
    if (!product) {
      return res.status(404).send('Product not found');
    } else {
      return res.json(product);
    }
  } catch (error) {
    return res.status(400);
  }
};

module.exports = {
  addproduct,
  getAllProducts,
  getProduct,
};
