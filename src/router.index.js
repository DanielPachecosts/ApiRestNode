const express = require("express");
const userRouter = require("./users/infrastructure/http/user-router");
const authRouter = require("./users/infrastructure/http/auth-router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", userRouter);
  router.use("/auth", authRouter);
}

module.exports = routerApi;
