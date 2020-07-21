const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const usersControllers = require('../controllers/userControllers');

router.get('/', auth, usersControllers.getUser);

router.post('/register', usersControllers.register);

router.post('/login', usersControllers.login);

router.post('/tokenIsValid', usersControllers.tokenIsValid);

module.exports = router;
