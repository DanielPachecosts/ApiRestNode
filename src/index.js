const express = require("express");
const routerApi = require("./router.index");
const config = require("./config");
const {
  errorHandler,
  boomErrorHandler,
} = require("./shared/infrastructure/middelwares/error-handler");
const { database } = require("./shared/infrastructure/database/mongo-config");

async function boostrap() {
  const app = express();
  const port = config.port;

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  routerApi(app);

  app.get("/", (req, res) => {
    res.send({ message: "Todo OK" });
  });

  app.use(boomErrorHandler);
  app.use(errorHandler);

  await database(
    config.dbConnection,
    config.dbHost,
    config.dbPort,
    config.dbUser,
    config.dbPassword,
    config.dbName
  );

  app.listen(port, () => {
    console.log(`express server on port ${port}`);
  });
}

boostrap();
