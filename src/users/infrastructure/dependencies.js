const UserController = require("./http/user-controller");
const AuthController = require("./http/auth-controller");
const CreateUser = require("../application/create-user");
const GetAllUsers = require("../application/get-users");
const GetById = require("../application/get-users-by-id");
const DeleteUser = require("../application/delete-user");
const UpdateUser = require("../application/update-user");
const LoginUser = require("../application/login-user");
const AuthFacebook = require("../application/auth-facebook");
const HashingService = require("./security/hashing-service");
const TokenService = require("./security/token-service");
const MongoUserRepository = require("./repositories/mongoose-user-repository");

// repositories
const mongoUserRepository = new MongoUserRepository();

// Use cases
const createUser = new CreateUser(mongoUserRepository, HashingService);
const getById = new GetById(mongoUserRepository);
const getAllusers = new GetAllUsers(mongoUserRepository);
const deleteUser = new DeleteUser(mongoUserRepository);
const updateUser = new UpdateUser(mongoUserRepository);
const loginUser = new LoginUser(
  mongoUserRepository,
  TokenService,
  HashingService
);
const authFacebook = new AuthFacebook(mongoUserRepository, TokenService);

// controllers
const userController = new UserController(
  createUser,
  getAllusers,
  getById,
  deleteUser,
  updateUser
);
const authController = new AuthController(loginUser, authFacebook);

module.exports = { userController, authController };
