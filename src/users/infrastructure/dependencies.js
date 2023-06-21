const UserController = require("./http/user-controller");
const CreateUser = require("../application/create-user");
const GetAllUsers = require("../application/get-users");
const GetById = require("../application/get-users-by-id");
const DeleteUser = require("../application/delete-user");
const UpdateUser = require('../application/update-user');
const HashingService = require("./security/bcrypt-service");
const UserMongoRepository = require("./repositories/mongoose-user-repository");

// services
const hashingService = new HashingService();

// repositories
const userMongoRepository = new UserMongoRepository();

// Use cases
const createUser = new CreateUser(userMongoRepository, hashingService);
const getById = new GetById(userMongoRepository);
const getAllusers = new GetAllUsers(userMongoRepository);
const deleteUser = new DeleteUser(userMongoRepository);
const updateUser = new UpdateUser(userMongoRepository)
const userController = new UserController(
  createUser,
  getAllusers,
  getById,
  deleteUser,
  updateUser
);

module.exports = userController;
