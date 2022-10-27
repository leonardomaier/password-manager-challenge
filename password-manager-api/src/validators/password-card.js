const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string().optional(),
  url: Joi.string().required(),
  name: Joi.string().optional(),
  username: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = {
  passwordCardSchema: schema
}