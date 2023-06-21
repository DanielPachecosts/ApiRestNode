const boom = require("@hapi/boom");
const UserModel = require("./mongoose-user.schema");

class UserMongoRepository {
  async get(userId) {
    const user = await UserModel.findById(userId);
    if (!user) {
      throw boom.notFound();
    }
    return user;
  }

  async getAll() {
    const users = await UserModel.find();
    return users;
  }

  async create(user) {
    const userSaved = new UserModel(user);
    const newUser = await userSaved.save();
    if (!newUser) {
      throw boom.badRequest();
    }
    return newUser;
  }

  async update(userId, changes) {
    await this.get(userId);
    const user = await UserModel.findByIdAndUpdate(userId, changes, {
      new: true,
    });
    return user;
  }

  async delete(userId) {
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) {
      throw boom.badRequest();
    }
    return true;
  }
}

module.exports = UserMongoRepository;
