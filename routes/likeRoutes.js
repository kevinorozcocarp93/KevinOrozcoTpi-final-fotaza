const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const likeController = require('../controllers/likeController');

router.post(
    '/:id',
    authMiddleware,
    likeController.like
);

module.exports = router;