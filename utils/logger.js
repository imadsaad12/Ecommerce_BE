const {createLogger, transports, format} = require('winston');

// Create a logger instance
const logger = createLogger({
  // Define the available transports (output destinations) for the logs
  transports: [
    new transports.Console({
      level: 'info', // Log only 'info' level and above
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

module.exports = logger;
