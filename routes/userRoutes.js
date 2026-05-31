const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

router.get('/perfil', authMiddleware, userController.perfil);

module.exports = router;