const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const followController = require('../controllers/followController');

router.post(
    '/:id',
    authMiddleware,
    followController.followUser
);

module.exports = router;