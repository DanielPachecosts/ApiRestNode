const UserController = require("./http/user-controller");
const AuthController = require("./http/auth-controller");
const CreateUser = require("../application/create-user");
const GetAllUsers = require("../application/get-users");
const GetById = require("../application/get-users-by-id");
const DeleteUser = require("../application/delete-user");
const UpdateUser = require("../application/update-user");
const LoginUser = require("../application/login-user");
const HashingService = require("./security/hashing-service");
const TokenService = require("./security/token-service");
const UserMongoRepository = require("./repositories/mongoose-user-repository");

// repositories
const userMongoRepository = new UserMongoRepository();

// Use cases
const createUser = new CreateUser(userMongoRepository, HashingService);
const getById = new GetById(userMongoRepository);
const getAllusers = new GetAllUsers(userMongoRepository);
const deleteUser = new DeleteUser(userMongoRepository);
const updateUser = new UpdateUser(userMongoRepository);
const loginUser = new LoginUser(
  userMongoRepository,
  TokenService,
  HashingService
);

// controllers
const userController = new UserController(
  createUser,
  getAllusers,
  getById,
  deleteUser,
  updateUser
);
const authController = new AuthController(loginUser);

module.exports = { userController, authController };
