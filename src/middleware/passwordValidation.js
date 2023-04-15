const isPasswordExist = (req, res, next) => {
  const bodyLogin = req.body;
  const hasPassword = 'password' in bodyLogin;
  if (!hasPassword) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  next();
};

const isPasswordValid = (req, res, next) => {
  const bodyLogin = req.body;
  const passwordTested = bodyLogin.password.length >= 6;

  if (!passwordTested) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  isPasswordExist,
  isPasswordValid,
};
