const Joi = require("joi");

const id = Joi.string();
const name = Joi.string()
  .regex(/^[A-Za-z\s]+$/)
  .min(3);
const email = Joi.string().email();
const password = Joi.string().min(6);

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
