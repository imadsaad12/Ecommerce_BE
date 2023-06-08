const makeError = (message, status) => {
  const error = new Error();
  error.status = status;
  error.message = message;
  return error;
};

module.exports = {
  makeError,
};
