const express = require('express');
const { signUp, signIn } = require('../controllers/accountController');
const { validate } = require('express-validation');
const { signupSchema, signinSchema } = require('../validations/account');
const router = express.Router();

router.post('/signup', validate(signupSchema), signUp);
router.post('/signin', validate(signinSchema), signIn);

module.exports = router;
