const isEmailExist = (req, res, next) => {
  const bodyLogin = req.body;
  const hasEmail = 'email' in bodyLogin;
  if (!hasEmail) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  next();
};

const isEmailValid = (req, res, next) => {
  const bodyLogin = req.body;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailTested = regex.test(bodyLogin.email);

  if (!emailTested) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = {
  isEmailExist,
  isEmailValid,
};
