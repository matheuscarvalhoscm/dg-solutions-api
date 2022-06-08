const Register = require('../services/services');

const getAllRegisters = async (_req, res) => {
  const registers = await Register.getAllRegisters();
  return res.status(200).json(registers);
};

const addRegister = async (req, res) => {
  try {
    const { name, birthDate } = req.body;
    const newRegister = await Register.addRegister(name, birthDate);
  
    return res.status(201).json(newRegister);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  getAllRegisters,
  addRegister,
}
