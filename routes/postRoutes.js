const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const postController = require('../controllers/postController');

router.get('/create', authMiddleware, postController.showCreate);

router.post('/create', authMiddleware, postController.create);

router.get('/mis-posts',
    authMiddleware,
    postController.misPosts
);

module.exports = router;