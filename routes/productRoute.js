const {
  addproduct,
  getAllProducts,
  getProduct,
  deleteP,
  updateP,
} = require('../controllers/productController');
const { validate } = require('express-validation');
const {
  addProductSchema,
  getProductSchema,
  deleteProductSchema,
  updateProductSchema,
} = require('../validations/products');

const productRoute = (router) => {
  router.post('/', validate(addProductSchema), addproduct);

  router.get('/', getAllProducts);

  router.get('/:id', validate(getProductSchema), getProduct);

  router.delete('/delete/:id', validate(deleteProductSchema), deleteP);

  router.put('/update/:id', validate(updateProductSchema), updateP);
  return router;
};

module.exports = productRoute;