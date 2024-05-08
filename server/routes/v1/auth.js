const express = require('express');
const { AuthController } = require('../../controllers');
const router = express.Router();

router.get('/signup', AuthController.signup);

router.get('/signin', AuthController.signin);

module.exports = router;
