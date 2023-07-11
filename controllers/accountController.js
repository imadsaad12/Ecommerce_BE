const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
  createAccount,
  findAccountByUserName,
} = require('../services/AccountService');
const logger = require('../utils/logger');
const {
  INTERNAL_ERROR_MESSAGE,
  CONFLICT_MESSAGE,
  NOT_FOUND_MESSAGE,
  UNAUTHORIZED_MESSAGE,
} = require('../utils/server-messages');
const {
  INTERNAL_SERVER,
  SIGNUP_SUCCESSFULLY,
  CONFLICT,
  NOT_FOUND,
  UNAUTHORIZED,
  SUCCESS,
} = require('../utils/server-Statuses');
const { makeError } = require('../utils/errors');
const { isEmpty } = require('lodash');

const signUp = async (req, res) => {
  try {
    const accountData = req.body;
    const { userName, password } = accountData;

    const account = await findAccountByUserName(userName);

    if (!isEmpty(account)) {
      logger.error('user name already exist');
      throw makeError(CONFLICT_MESSAGE, CONFLICT);
    }

    logger.info(`Creating account for ${userName}`);

    const hashPassword = await bcrypt.hash(password, 10);
    const payload = { ...accountData, password: hashPassword };

    await createAccount(payload);

    const token = jwt.sign({ userName }, process.env.SECRET_KEY);

    res.status(SIGNUP_SUCCESSFULLY);
    res.json({ token });
  } catch (error) {
    logger.error(error);

    const message = error.message || INTERNAL_ERROR_MESSAGE;
    const status = error.status || INTERNAL_SERVER;

    res.status(status);
    res.send(makeError(message, status));
  }
};

const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await findAccountByUserName(userName);

    if (isEmpty(user)) {
      logger.error('User not found');
      throw makeError(NOT_FOUND_MESSAGE, NOT_FOUND);
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      logger.error('Password is Incorrect');
      throw makeError(UNAUTHORIZED_MESSAGE, UNAUTHORIZED);
    }

    const token = jwt.sign({ userName }, process.env.SECRET_KEY);

    res.status(SUCCESS);
    res.json({ token });
  } catch (error) {
    logger.error(error);

    const message = error.message || INTERNAL_ERROR_MESSAGE;
    const status = error.status || INTERNAL_SERVER;

    res.status(status);
    res.send(makeError(message, status));
  }
};

module.exports = {
  signUp,
  signIn,
};
