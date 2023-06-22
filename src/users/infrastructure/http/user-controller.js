class UserController {
  constructor(CreateUser, GetAllUsers, GetById, DeleteUser, UpdateUser) {
    this.createUser = CreateUser;
    this.getAllUsers = GetAllUsers;
    this.getById = GetById;
    this.deleteUser = DeleteUser;
    this.updateUser = UpdateUser;
  }

  async create(req, res, next) {
    try {
      const payload = req.body;
      const user = await this.createUser.run(payload);
      res.status(201).json({ message: "create endpoint OK", user: user });
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      const id = req.params.id;
      const user = await this.getById.run(id);
      res.status(200).json({ message: "get endpoint OK", user: user });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      console.log(req.headers.authorization);
      const users = await this.getAllUsers.run();
      res.status(200).json({ message: "getAll endpoint OK", users: users });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const id = req.params.id;
      const changes = req.body;
      const user = await this.updateUser.run(id, changes);
      res
        .status(200)
        .json({ message: "update endpoint OK", userUpdated: true, user });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const id = req.params.id;
      const userDeleted = await this.deleteUser.run(id);
      res.status(200).json({ message: "delete endpoint OK", userDeleted });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
