const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const commentController = require('../controllers/commentController');

router.post(
    '/create/:id',
    authMiddleware,
    commentController.create
);

module.exports = router;