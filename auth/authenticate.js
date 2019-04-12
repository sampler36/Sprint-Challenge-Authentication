const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

// const jwt =
//   process.env.JWT_SECRET ||
//   'add a .env file to root of project with the JWT_SECRET variable';

// quickly see what this file exports
module.exports = {
  authenticate,
  generateToken
};
//token services experiment
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ['Jokes'],
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}
