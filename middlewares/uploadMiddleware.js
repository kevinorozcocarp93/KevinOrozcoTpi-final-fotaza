const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'fotaza',
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp']
    }
});

const upload = multer({
    storage
});

module.exports = upload;