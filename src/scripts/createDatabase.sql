-- create the database (drop it if it already exists)
DROP DATABASE IF EXISTS dg_solutions_challenge;
CREATE DATABASE dg_solutions_challenge;

-- selecting the database I am going to work with
USE dg_solutions_challenge;

-- create the 'registers' table
CREATE TABLE registers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  birth_date DATE NOT NULL,
  PRIMARY KEY(id)
);

-- populate 'registers' table with two registers
INSERT INTO registers (name, birth_date)
VALUES('Ada Lovelace', '1957-12-10'),
      ('Alan Turing', '1951-06-12');