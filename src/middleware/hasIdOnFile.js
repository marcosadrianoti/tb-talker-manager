const utilsFile = require('../utils/readWriteTalkerFile');

const hasIdOnFile = async (req, res, next) => {
  const { id } = req.params;
  const arrTalkers = await utilsFile.readTalkerFile();
  const talker = arrTalkers.find((talk) => talk.id === Number(id));
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  next();
};

module.exports = { hasIdOnFile };
