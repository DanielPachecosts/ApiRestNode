const express = require("express");
const { authController } = require("../dependencies");

const authRouter = express.Router();

authRouter.post("/login", authController.login.bind(authController));

module.exports = authRouter;
