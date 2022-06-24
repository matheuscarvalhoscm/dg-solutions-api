const conn = require('./connection');

const serialize = (data) => ({
    id: data.id,
    name: data.name,
    birthDate: data.birth_date,
});

const getAllRegisters = async () => {
  const [registers] = await conn.execute(
    'SELECT * FROM dg_solutions_challenge.registers'
  );
  return registers.map(serialize);
};

const addRegister = async (name, birthDate, email, tel) => {
  const [register] = await conn.execute(
    'INSERT INTO dg_solutions_challenge.registers (name, birth_date, email, tel) VALUE (?, ?, ?, ?)',
    [name, birthDate, email, tel],
  );

  return { id: register.insertId, name, birthDate };
};

module.exports = {
  getAllRegisters,
  addRegister,
}
