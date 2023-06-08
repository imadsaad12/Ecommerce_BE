// eslint-disable-next-line max-len
const {createProduct, allProducts, getSingleProduct} = require('../services/productService');

const addproduct = async (req, res) => {
  const data = req.body;
  try {
    await createProduct(data);
    res.status(200).send('Product added successfully');
  } catch (error) {
    res.status(400);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await allProducts();
    if (!products) {
      return res.status(404).send('No products available');
    }
    res.json(products);
  } catch (error) {
    res.status(400);
  }
};

const getProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await getSingleProduct(id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.json(product);
  } catch (error) {
    res.status(400);
  }
};

module.exports = {
  addproduct,
  getAllProducts,
  getProduct,
};
