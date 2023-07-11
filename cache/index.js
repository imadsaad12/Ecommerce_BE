const NodeCache = require('node-cache');
const logger = require('../utils/logger');

const cache = new NodeCache();

module.exports = (duration) => (req, res, next) => {
  const method = req.method;

  if (method !== 'GET') {
    // TODO[Imad]:Add pattern to remove cached data
    return next();
  }

  const key = req.originalUrl;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    logger.info(`Cache hit for ${key}`);
    res.json(cachedResponse);
  } else {
    res.originalJson = res.json;
    res.json = (body) => {
      res.originalJson(body);
      cache.set(key, body, duration);
    };

    next();
  }
};
