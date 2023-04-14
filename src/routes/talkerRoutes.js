const express = require('express');
const utilsFile = require('../utils/readWriteTalkerFile');

const route = express.Router();

route.get('/', async (req, res, next) => {
  const talkers = await utilsFile.readTalkerFile();
  if (!talkers) {
    return next({ statusCode: 500, message: 'Error opening file' });
  }
  return res.status(200).json(talkers);
});

module.exports = route;
