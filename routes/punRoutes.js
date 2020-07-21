const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const punControllers = require('../controllers/punControllers');

router.get('/all', punControllers.getPuns);

router.post('/', auth, punControllers.createPun);

module.exports = router;
