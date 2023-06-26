const express = require('express');
const { SUCCESS } = require('./server-Statuses');
const { validateToken } = require('../middlewares/authenticate');
const { tryCatch } = require('./errors');

// This Function is used to authenticate every request.
// So it will be validated once it pass the validateToken middleware

const AuthenticatedRouter = () => {
  const router = new express.Router({ mergeParams: true });

  router.all('/*', tryCatch(validateToken), (req, res, next) => {
    res.statusCode = SUCCESS;
    next();
  });

  return router;
};

module.exports = AuthenticatedRouter;
