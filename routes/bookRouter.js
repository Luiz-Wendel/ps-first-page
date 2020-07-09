const express = require('express');

// Controller
const bookController = require('../controllers/bookController');

// Middlewares
const auth = require('../middlewares/auth');

const router = express.Router();

// Apply auth middleware in every route
router.use(auth);

router.get('/', bookController.index);
router.get('/:id', bookController.show);

module.exports = router;
