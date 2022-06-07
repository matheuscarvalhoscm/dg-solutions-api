const express = require('express');
const Register = require('../controllers/controllers');

const router = express.Router();

router.get('/', Register.getAllRegisters);

module.exports = router;
