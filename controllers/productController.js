const Product = require("../models/productModel");
const serviceProduct = require("../models/productModel");

const addproduct = async (req, res) => {
  const data = req.body;
  try {
    product = await new Product(data);

    await product.save();

    return res.json({ id: product._id });
  } catch (error) {
    console.log(error);
    return res.send("Failed to add a new product");
  }
};

const getAllProducts = async (req, res) => {
  try {
    const all_products = await Product.find();
    if (!all_products) {
      return res.send("No products available");
    } else {
      return res.json(all_products);
    }
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.send("Product not found");
    } else {
      return res.json(product);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addproduct,
  getAllProducts,
  getProduct,
};
