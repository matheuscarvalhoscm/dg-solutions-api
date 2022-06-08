const Register = require('../models/models');
const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'O campo "Nome completo" não pode estar vazio.'
  }),
  birthDate: Joi.string().required().messages({
    'string.empty': 'O campo "Data de nascimento" não pode estar vazio.'
  }),
});

const getAllRegisters = async () => {
  const registers = await Register.getAllRegisters();
  return registers;
};

const addRegister = async (name, birthDate) => {
  const { error } = registerSchema.validate({ name, birthDate });
  if (error) throw error;
  const newRegister = await Register.addRegister(name, birthDate);
  
  return newRegister;
};


module.exports = {
  getAllRegisters,
  addRegister,
}