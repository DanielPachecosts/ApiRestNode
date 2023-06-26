const bcrypt = require("bcrypt");
const Boom = require("@hapi/boom");

class HashingService {
  async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  async comparePassword(password, hash) {
    const isValid = await bcrypt.compare(password, hash);
    if (!isValid) {
      throw Boom.badRequest();
    }
    return isValid;
  }
}

module.exports = new HashingService();
