const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const followController = require('../controllers/followController');

router.post(
    '/:id',
    authMiddleware,
    followController.followUser
);

router.post(
    '/unfollow/:id',
    authMiddleware,
    followController.unfollowUser
);

module.exports = router;