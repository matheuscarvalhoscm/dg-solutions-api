const conn = require('./connection');

const getAllRegisters = async () => {
  const [registers] = await conn.execute(
    'SELECT * FROM dg_solutions_challenge.registers'
  );
  return registers;
};

const addRegister = async (name, birthDate) => {
  conn.execute(
    'INSERT INTO dg_solutions_challenge.registers (name, birth_date) VALUE (?, ?)',
    [name, birthDate],
  )
};

module.exports = {
  getAllRegisters,
  addRegister,
}
