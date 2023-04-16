const utilsFile = require('../utils/readWriteTalkerFile');

const seachByTerm = async (req, res, next) => {
  const stringTerm = req.query.q;
  console.log(stringTerm);
  const talkers = await utilsFile.getTalkerByTerm(stringTerm);
  req.filteredTalkers = talkers;
  next();
};

const seachByRate = async (req, res, next) => {
  if ('rate' in req.query) {
    const rate = Number(req.query.rate);
    if (!Number.isInteger(rate)
      || rate < 1
      || rate > 5) {
      return res.status(400)
        .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
    }
    const filteredTalkers = await utilsFile.getTalkerByRate(rate, req.filteredTalkers);
    req.filteredTalkers = filteredTalkers;
  }
  next();
};

module.exports = {
  seachByTerm,
  seachByRate,
};
