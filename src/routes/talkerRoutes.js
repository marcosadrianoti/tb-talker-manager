const express = require('express');
const utilsFile = require('../utils/readWriteTalkerFile');
const { isAuthorizationExist, isTokenValid } = require('../middleware/talkerValidation');

const route = express.Router();

route.get('/', async (req, res) => {
  const talkers = await utilsFile.readTalkerFile();
  if (!talkers) {
    return res.status(500).json({ message: 'Erro ao abrir o arquivo' });
  }
  return res.status(200).json(talkers);
});

route.get('/:id', async (req, res) => {
  const talker = await utilsFile.getTalkerById(req.params.id);
  if (talker) {
    return res.status(200).json(talker);
  }
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

route.post('/', isAuthorizationExist, isTokenValid, async (req, res) => {
  return res.status(201).json({ message: 'Deu certo'});
});

module.exports = route;
