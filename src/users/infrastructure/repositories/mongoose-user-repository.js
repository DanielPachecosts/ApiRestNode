const boom = require("@hapi/boom");
const LocalUserModel = require("./mongoose-user-schema");
const FacebooklUserModel = require("./facebook-user-schema");

class UserMongoRepository {
  async getById(userId) {
    const user = await LocalUserModel.findById(userId);
    if (!user) {
      throw boom.notFound();
    }
    return user;
  }

  async getByEmail(email) {
    const user = await LocalUserModel.findOne({ email: email });
    if (!user) {
      throw boom.badRequest();
    }
    return user;
  }

  async getAll() {
    const users = [];
    const localUsers = await LocalUserModel.find();
    const facebookUsers = await FacebooklUserModel.find();
    users.push(localUsers, facebookUsers);
    return users;
  }

  async create(user) {
    const userSaved = new LocalUserModel(user);
    const newUser = await userSaved.save();

    if (!newUser) {
      throw boom.badRequest();
    }
    return newUser;
  }

  async update(userId, changes) {
    await this.getById(userId);
    const user = await LocalUserModel.findByIdAndUpdate(userId, changes, {
      new: true,
    });
    return user;
  }

  async delete(userId) {
    const user = await LocalUserModel.findByIdAndDelete(userId);
    if (!user) {
      throw boom.badRequest();
    }
    return true;
  }

  async facebookFindOrCreate(profile) {
    const userStored = await FacebooklUserModel.findOne({
      facebookId: profile.id,
    });
    if (userStored) {
      return userStored;
    }

    const newUser = {
      facebookId: profile.id,
      name: profile.displayName,
      provider: profile.provider,
    };

    const user = new FacebooklUserModel(newUser);
    user.save();
    return user;
  }
}

module.exports = UserMongoRepository;
