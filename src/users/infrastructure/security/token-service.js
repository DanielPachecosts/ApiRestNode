const jwt = require("jsonwebtoken");
const config = require("../../../config");

class TokenService {

  secretKey = config.jwtSecretKey
 
  signToken(payload) {
    return jwt.sign(payload, this.secretKey, { expiresIn: "30m" });
  }

  verifyToken(token) {
    return jwt.verify(token,  this.secretKey);
  }
}

module.exports = new TokenService();
