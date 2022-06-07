const Register = require('../models/models');

const getAllRegisters = async () => {
  const registers = await Register.getAllRegisters();
  return registers;
};


module.exports = {
  getAllRegisters,
}