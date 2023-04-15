const express = require('express');
const utilsFile = require('../utils/readWriteTalkerFile');
const { isAuthorizationExist, isTokenValid } = require('../middleware/tokenValidation');
const { hasIdOnFile } = require('../middleware/hasIdOnFile');
const {
  isNameValid,
  isAgeValid,
  isTalkValid,
  isWatchedAtValid,
  isRateValid,
} = require('../middleware/talkerValidation');

const route = express.Router();

route.get('/search',
  isAuthorizationExist,
  isTokenValid,
  async (req, res) => {
    const stringTerm = req.query.q;
    const talker = await utilsFile.getTalkerByTerm(stringTerm);
    return res.status(200).json(talker);
});

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

route.post('/',
  isAuthorizationExist,
  isTokenValid,
  isNameValid,
  isAgeValid,
  isTalkValid,
  isWatchedAtValid,
  isRateValid,
  async (req, res) => {
    const talker = req.body;
    const id = (await utilsFile.getTalkerLastId()) + 1;
    const talkerWithId = {
      id,
      ...talker,
    };
    await utilsFile.insertNewTalker(talkerWithId);

    return res.status(201).json(talkerWithId);
});

route.put('/:id',
  isAuthorizationExist,
  isTokenValid,
  isNameValid,
  isAgeValid,
  isTalkValid,
  isWatchedAtValid,
  isRateValid,
  hasIdOnFile,
  async (req, res) => {
    const id = Number(req.params.id);
    const talkerBody = req.body;
    await utilsFile.saveEditedTalker(id, talkerBody);
    const talkerEdited = {
      id,
      ...talkerBody,
    };
    return res.status(200).json(talkerEdited);
});

route.delete('/:id',
  isAuthorizationExist,
  isTokenValid,
  async (req, res) => {
    const id = Number(req.params.id);
    await utilsFile.deleteTalker(id);
    return res.status(204).json();
});

module.exports = route;
