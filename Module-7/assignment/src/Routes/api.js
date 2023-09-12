const express = require('express');
const router = express.Router();

const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');



router.get('/blogs/create', blogController.create);
router.get('/blogs/read/:id', blogController.read);
router.get('/blogs/delete/:id', blogController.delete);
router.get('/blogs/update/:id', blogController.update);

router.get('/comments/create', commentController.create);
router.get('/comments/read/:id', commentController.read);
router.get('/comments/delete/:id', commentController.delete);
router.get('/comments/update/:id', commentController.update);

router.get('/messages/create', messageController.create);
router.get('/messages/read/:id', messageController.read);
router.get('/messages/delete/:id', messageController.delete);
router.get('/messages/update/:id', messageController.update);

router.get('/portfolios/create', portfolioController.create);
router.get('/portfolios/read/:id', portfolioController.read);
router.get('/portfolios/delete/:id', portfolioController.delete);
router.get('/portfolios/update/:id', portfolioController.update);

router.get('/products/create', productController.create);
router.get('/products/read/:id', productController.read);
router.get('/products/delete/:id', productController.delete);
router.get('/products/update/:id', productController.update);

module.exports = router;