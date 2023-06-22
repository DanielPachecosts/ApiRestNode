const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");

class HashingService {
  async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  async comparePassword(password, hash) {
    const isValid = await bcrypt.compare(password, hash);
    if (!isValid) {
      throw boom.badRequest();
    }
    return isValid;
  }
}

module.exports = new HashingService();
