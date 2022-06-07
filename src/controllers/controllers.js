const Register = require('../services/services');

const getAllRegisters = async (_req, res) => {
  const registers = await Register.getAllRegisters();
  return res.status(200).json(registers);
};

module.exports = {
  getAllRegisters,
}
