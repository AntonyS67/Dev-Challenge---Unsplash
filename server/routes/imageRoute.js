const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.get('/',imageController.getImages);
router.get('/search/:query',imageController.getByTitle);
router.post('/',imageController.createImage);
router.put('/:id',imageController.updateImage);
router.delete('/:id',imageController.deleteImage);

module.exports = router;