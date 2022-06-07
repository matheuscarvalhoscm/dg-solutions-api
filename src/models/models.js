const conn = require('./connection');

const getAllRegisters = async () => {
  const [registers] = await conn.execute(
    'SELECT * FROM dg_solutions_challenge.registers'
  );
  return registers;
};

module.exports = {
  getAllRegisters,
}
