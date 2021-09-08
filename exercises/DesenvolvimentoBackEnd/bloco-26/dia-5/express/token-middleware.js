/* auth-middleware.js */
const tokenDefault = '123'

const tokenMiddleware = (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token can`t be blank!' });
  }

  console.log(token, typeof token);
  console.log(tokenDefault, typeof tokenDefault);
  
  if (token !== tokenDefault) return res.status(401).json({ message: 'Invalid token!' });

  next();
};

module.exports = tokenMiddleware;