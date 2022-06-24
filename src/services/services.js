const Register = require('../models/models');
const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'O campo "Nome completo" não pode estar vazio.'
  }),
  birthDate: Joi.string().required().messages({
    'string.empty': 'O campo "Data de nascimento" não pode estar vazio.'
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'O campo "Email" não pode esta vazio.'
  }),
  tel: Joi.string().length(11).required().messages({
    'string.empty': 'O campo "Telefone" não pode estar vazio.'
  }),
});

const getAllRegisters = async () => {
  const registers = await Register.getAllRegisters();
  return registers;
};

const addRegister = async (name, birthDate, email, tel) => {
  const { error } = registerSchema.validate({ name, birthDate, email, tel});
  if (error) throw error;
  const newRegister = await Register.addRegister(name, birthDate, email, tel);
  
  return newRegister;
};


module.exports = {
  getAllRegisters,
  addRegister,
}