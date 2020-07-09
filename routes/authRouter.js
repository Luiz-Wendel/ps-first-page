const express = require('express');

// Controller
const authController = require('../controllers/authController');

// Middlewares
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/signUp', authController.signUp);
router.get('/signIn', authController.signIn);
router.post('/signIn', authController.signInAuth);
router.get('/profile', auth, authController.profile);
router.get('/logout', authController.logout);

module.exports = router;
