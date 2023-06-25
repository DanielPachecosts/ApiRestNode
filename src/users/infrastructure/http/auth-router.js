const express = require("express");
const { authController } = require("../dependencies");
const passport = require("passport");

const authRouter = express.Router();

authRouter.post("/login", authController.login.bind(authController));

authRouter.get("/login-facebook", passport.authenticate("facebook"));

authRouter.get(
  "/facebook/callback",
  passport.authenticate("facebook", { session: false }),
  authController.facebookLogin.bind(authController)
);

module.exports = authRouter;
