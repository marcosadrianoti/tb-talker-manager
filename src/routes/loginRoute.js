const express = require('express');
const getToken = require('../utils/generateToken');
const { isEmailExist, isEmailValid } = require('../middleware/emailValidation');
const { isPasswordExist, isPasswordValid } = require('../middleware/passwordValidation');

const route = express.Router();

route.post('/', isEmailExist, isEmailValid, isPasswordExist, isPasswordValid, (req, res) => {
  const token = getToken.generateToken();
  return res.json(token);
});

module.exports = route;
