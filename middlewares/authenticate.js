const jwt = require('jsonwebtoken');
const { makeError } = require('../utils/errors');
const { UNAUTHORIZED_MESSAGE } = require('../utils/server-messages');
const { UNAUTHORIZED } = require('../utils/server-Statuses');

const validateToken = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return next(makeError(UNAUTHORIZED_MESSAGE, UNAUTHORIZED));
  }

  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  req.user = decodedToken;

  next();
};

module.exports = {
  validateToken,
};
