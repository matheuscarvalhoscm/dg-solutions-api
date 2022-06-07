const express = require('express');
const Register = require('../controllers/controllers');

const router = express.Router();

router.get('/', Register.getAllRegisters);
router.post('/', Register.addRegister);

module.exports = router;
