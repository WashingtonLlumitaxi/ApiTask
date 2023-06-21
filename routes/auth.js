const express = require('express');
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");


/**
 * Crear un registro
 */
// TODO http://localhost:3001/api/auth/login
// TODO http://localhost:3001/api/auth/registrer

router.post("/register", validatorRegister, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);


module.exports = router;