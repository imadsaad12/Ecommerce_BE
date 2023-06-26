const Accounts = require('../models/accountModel');

const createAccount = (data) => Accounts.create(data);

const findAccountByUserName = (userName) => Accounts.findOne({ userName });

module.exports = {
  createAccount,
  findAccountByUserName,
};
