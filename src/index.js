const express = require("express");
const routerApi = require("./router.index");
const config = require("./config");
const {
  errorHandler,
  boomErrorHandler,
} = require("./shared/infrastructure/middelwares/error-handler");
const database = require("./shared/infrastructure/database/mongo-config");
const message = require("./info-message");

async function bootstrap() {
  const app = express();
  const port = config.port;

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  require("./users/infrastructure/utils/facebook-strategy");

  routerApi(app);

  app.get("/", (req, res) => {
    res.send(message);
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

bootstrap();
