const Boom = require("@hapi/boom");
const TokenService = require("../../../users/infrastructure/security/token-service");

function authHandler(req, res, next) {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    throw Boom.unauthorized();
  }

  const [authType, token] = authHeaders.split(" ");

  if (authType !== "Bearer") {
    throw Boom.unauthorized();
  }

  try {
    const payload = TokenService.verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    throw Boom.unauthorized(error);
  }
}

module.exports = authHandler;
