const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userControllers = require('../controllers/userControllers');

router.get('/', auth, userControllers.getUser);

router.post('/register', userControllers.register);

router.post('/login', userControllers.login);

router.post('/tokenIsValid', userControllers.tokenIsValid);

module.exports = router;
