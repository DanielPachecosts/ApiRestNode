const bcrypt = require("bcrypt");

class HashingService {
  
  async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
  
  async comparePassword(password, hash) {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
  }
}

module.exports = HashingService;
