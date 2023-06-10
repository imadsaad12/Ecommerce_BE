const logger = require('../utils/logger');

const logApiHit = (req, res, next) => {
  logger.info(`API hit: ${req.method} ${req.url}`);
  next();
};

module.exports = logApiHit;
