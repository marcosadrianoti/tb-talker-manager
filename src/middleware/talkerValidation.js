// NAME
const isNameValid = (req, res, next) => {
  const talkerBody = req.body;
  const hasName = 'name' in talkerBody;
  if (!hasName || talkerBody.name.length === 0) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (talkerBody.name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

// AGE
const isAgeValid = (req, res, next) => {
  const talkerBody = req.body;
  const hasAge = 'age' in talkerBody;
  if (!hasAge || talkerBody.age.length === 0) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (!Number.isInteger(talkerBody.age) || talkerBody.age <= 18) {
    return res.status(400)
      .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
  next();
};

// TALK
const isTalkValid = (req, res, next) => {
  const talkerBody = req.body;
  const hasTalk = 'talk' in talkerBody;
  if (!hasTalk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

// WATCHEDAT
const isWatchedAtValid = (req, res, next) => {
  const talkerBody = req.body;
  const hasWatchedAt = 'watchedAt' in talkerBody.talk;
  if (!hasWatchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  // WATCHEDAT FORMAT
  const date = talkerBody.talk.watchedAt;
  const regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

  if (!regex.test(date)) {
    return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

// RATE
const isRateValid = (req, res, next) => {
  const talkerBody = req.body;
  const hasRate = 'rate' in talkerBody.talk;
  if (!hasRate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  // INT 1 < RATE < 5
  if (!Number.isInteger(talkerBody.talk.rate)
    || talkerBody.talk.rate < 1
    || talkerBody.talk.rate > 5) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }

  next();
};

module.exports = {
  isNameValid,
  isAgeValid,
  isTalkValid,
  isWatchedAtValid,
  isRateValid,
};
