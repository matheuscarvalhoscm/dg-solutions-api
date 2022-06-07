const mysql = require('mysql2/promise');
require('dotenv').config();

const conn = mysql.createPool({
  host: 'localhost',
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: 'dg_solutions_challenge',
});

module.exports = conn;
