const express = require('express');
const router = express.Router();

const authMiddleware =
    require('../middlewares/authMiddleware');

const notificationController =
    require('../controllers/notificationController');

router.get(
    '/',
    authMiddleware,
    notificationController.listar
);

module.exports = router;