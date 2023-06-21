const express = require('express');
const validatorHandler = require('../../shared/infrastructure/middelwares/validator-handler');

const authRouter = express.Router();

authRouter.post('/login');
authRouter.get('/logout');

module.exports = authRouter;