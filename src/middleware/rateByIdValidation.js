const rateByIdValidation = async (req, res, next) => {
  const hasRate = 'rate' in req.body;
  if (!hasRate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  // INT 1 < RATE < 5
  const { rate } = req.body;
  if (!Number.isInteger(rate)
    || rate < 1
    || rate > 5) {
    return res.status(400)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

module.exports = { rateByIdValidation };
