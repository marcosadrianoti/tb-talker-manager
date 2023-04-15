// const isAuthorized = (req, res, next) => {
//   const authorizationHeader = req.headers.authorization;
//   if (authorizationHeader)
// }

const isAuthorizationExist = (req, res, next) => {
  const header = req.headers;
  const hasAuthorization = 'authorization' in header;
  if (!hasAuthorization || header.authorization.length === 0) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  next();
};

const isTokenValid = (req, res, next) => {
  const token = req.headers.authorization;
  if (token.length !== 16 || typeof token !== 'string') {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
}

module.exports = {
  isAuthorizationExist,
  isTokenValid,
};
