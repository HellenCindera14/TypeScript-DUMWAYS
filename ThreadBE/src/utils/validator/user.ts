import Joi = require("joi");

 
export  const registerSchema = Joi.object().keys({
    fullname: Joi.string().required(),
    username: Joi.string().required().min(4).max(100),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(100),
  });


export  const loginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(100),
  });