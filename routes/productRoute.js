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

const productRoute = (router) => {
  router.post('/', validate(addProductSchema), addproduct);

  router.get('/', getAllProducts);

  router.get('/:id', validate(getProductSchema), getProduct);
  return router;
};

module.exports = productRoute;
