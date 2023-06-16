// eslint-disable-next-line max-len
const {
  createProduct,
  allProducts,
  getSingleProduct,
} = require('../services/productService');
const logger = require('../utils/logger');
const { makeError } = require('../utils/errors');
const {
  SUCCESS,
  INTERNAL_SERVER,
  NOT_FOUND,
  SUCCESS_NO_CONTENT,
} = require('../utils/server-Statuses');
const {
  SUCCESS_MESSAGE,
  INTERNAL_ERROR_MESSAGE,
  NOT_FOUND_MESSAGE,
} = require('../utils/server-messages');

const addproduct = async (req, res) => {
  const data = req.body;
  try {
    await createProduct(data);
    logger.info('Product added successfully');

    res.statusCode = SUCCESS_NO_CONTENT;
    res.send(SUCCESS_MESSAGE);
  } catch (error) {
    const message = error.message || INTERNAL_ERROR_MESSAGE;
    const status = error.statusCode || INTERNAL_SERVER;

    logger.error(message);

    res.send(makeError(message, status));
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await allProducts();

    if (!products) {
      logger.error('No products found');

      res.status = NOT_FOUND;
      return res.send(NOT_FOUND_MESSAGE);
    }

    res.statusCode = SUCCESS;
    res.json(products);
  } catch (error) {
    const message = error.message || INTERNAL_ERROR_MESSAGE;
    const status = error.statusCode || INTERNAL_SERVER;

    logger.error(message);

    res.send(makeError(message, status));
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await getSingleProduct(id);

    if (!product) {
      logger.error('No products found');

      res.status = NOT_FOUND;
      return res.send(NOT_FOUND_MESSAGE);
    }
    res.statusCode = SUCCESS;
    res.json(product);
  } catch (error) {
    const message = error.message || INTERNAL_ERROR_MESSAGE;
    const status = error.statusCode || INTERNAL_SERVER;

    logger.error(message);

    res.send(makeError(message, status));
  }
};

module.exports = {
  addproduct,
  getAllProducts,
  getProduct,
};
