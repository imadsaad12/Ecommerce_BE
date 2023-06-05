module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'no-console': 'error',
  },
};
