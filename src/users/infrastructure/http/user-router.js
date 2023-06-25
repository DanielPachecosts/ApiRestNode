const express = require("express");
const { userController } = require("../dependencies");
const validatorHandler = require("../../../shared/infrastructure/middelwares/validator-handler");
const authHandler = require("../../../shared/infrastructure/middelwares/auth-handler");
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require("../utils/user-validation-schemas");

const userRouter = express.Router();

userRouter.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  userController.create.bind(userController)
);

userRouter.get("/", authHandler, userController.getAll.bind(userController));

userRouter.get(
  "/current",
  authHandler,
  userController.getCurrentUser.bind(userController)
);

userRouter.put(
  "/",
  authHandler,
  validatorHandler(updateUserSchema, "body"),
  userController.update.bind(userController)
);

userRouter.delete("/", authHandler, userController.delete.bind(userController));

module.exports = userRouter;
