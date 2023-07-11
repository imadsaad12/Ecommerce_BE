const {
  addproduct,
  getAllProducts,
  getProduct,
} = require('../controllers/productController');
const { validate } = require('express-validation');
const {
  addProductSchema,
  getProductSchema,
} = require('../validations/products');
const cache = require('../cache');

const productRoute = (router) => {
  router.post('/', validate(addProductSchema), addproduct);

  // ignore cache middleware for now

  router.get('/', cache(0), getAllProducts);

  router.get('/:id', validate(getProductSchema), getProduct);

  return router;
};

module.exports = productRoute;
