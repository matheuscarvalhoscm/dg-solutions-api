const Register = require('../services/services');
const { OK, CREATED, BAD_REQUEST } = require('../utils/dictionary');

const getAllRegisters = async (_req, res) => {
  const registers = await Register.getAllRegisters();
  return res.status(OK).json(registers);
};

const addRegister = async (req, res) => {
  try {
    const { name, birthDate, email, tel } = req.body;
    const newRegister = await Register.addRegister(name, birthDate, email, tel);
  
    return res.status(CREATED).json(newRegister);
  } catch (error) {
    return res.status(BAD_REQUEST).json(error.message);
  }
};

module.exports = {
  getAllRegisters,
  addRegister,
}
