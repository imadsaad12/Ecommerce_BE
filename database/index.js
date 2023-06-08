const mongoose = require('mongoose');
const logger = require('../utils');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('connected to database');
  } catch (error) {
    logger.error('Failed to connect to database');
  }
};
module.exports = {
  connectToDatabase,
};
