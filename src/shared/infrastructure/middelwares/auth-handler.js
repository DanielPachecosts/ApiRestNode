const boom = require("@hapi/boom");
const TokenService = require("../../../users/infrastructure/security/token-service");

function authHandler(req, res, next) {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    throw boom.unauthorized();
  }

  const [authType, token] = authHeaders.split(" ");

  if (authType !== "Bearer") {
    throw boom.unauthorized();
  }

  try {
    const payload = TokenService.verifyToken(token);
    req.user = payload;
    next();
  } catch (error) {
    throw boom.unauthorized(error);
  }
}

module.exports = authHandler;
