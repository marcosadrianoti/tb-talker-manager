const utilsFile = require('../utils/readWriteTalkerFile');

const seachByTerm = async (req, res, next) => {
  const stringTerm = req.query.q;
  const talkers = await utilsFile.getTalkerByTerm(stringTerm);
  req.filteredTalkers = talkers;
  next();
};

module.exports = {
  seachByTerm,
};
