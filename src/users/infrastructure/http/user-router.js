const express = require("express");
const userController = require("../dependencies");
const validatorHandler = require("../../../shared/infrastructure/middelwares/validator-handler");
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} = require("../../application/user-validation-schemas");

const userRouter = express.Router();

userRouter.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  userController.create.bind(userController)
);

userRouter.get("/", userController.getAll.bind(userController));

userRouter.get(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  userController.get.bind(userController)
);

userRouter.put(
  "/:id/",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  userController.update.bind(userController)
);

userRouter.delete(
  "/:id/",
  validatorHandler(getUserSchema, "params"),
  userController.delete.bind(userController)
);

module.exports = userRouter;
