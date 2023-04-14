const express = require('express');
const getToken = require('../utils/generateToken');

const route = express.Router();

route.post('/', (req, res) => {
  const token = getToken.generateToken();
  return res.json(token);
});

module.exports = route;
