const express = require('express');
const router = express.Router();


const blogController = require('../../src/Controllers/blogController');
const blogDetailsController = require('../../src/Controllers/blogDetailsController');
const commentController = require('../../src/Controllers/commentController');
const messageController = require('../../src/Controllers/messageController');
const portfolioController = require('../../src/Controllers/portfolioController');
const productController = require('../../src/Controllers/productController');
const profitController = require('../../src/Controllers/profitController');
const projectController = require('../../src/Controllers/projectController');
const serviceController = require('../../src/Controllers/serviceController');
const titleController = require('../../src/Controllers/titleController');


router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/delete', blogController.delete);
router.get('/blog/update', blogController.update);

router.get('/blogDetails/create', blogDetailsController.create);
router.get('/blogDetails/read', blogDetailsController.read);
router.get('/blogDetails/delete', blogDetailsController.delete);
router.get('/blogDetails/update', blogDetailsController.update);


router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/delete', commentController.delete);
router.get('/comment/update', commentController.update);

router.get('/message/create', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/delete', messageController.delete);
router.get('/message/update', messageController.update);

router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/delete', portfolioController.delete);
router.get('/portfolio/update', portfolioController.update);

router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/delete', productController.delete);
router.get('/product/update', productController.update);

router.get('/profit/create', profitController.create);
router.get('/profit/read', profitController.read);
router.get('/profit/delete', profitController.delete);
router.get('/profit/update', profitController.update);

router.get('/project/create', projectController.create);
router.get('/project/read', projectController.read);
router.get('/project/delete', projectController.delete);
router.get('/project/update', projectController.update);

router.get('/service/create', serviceController.create);
router.get('/service/read', serviceController.read);
router.get('/service/delete', serviceController.delete);
router.get('/service/update', serviceController.update);

router.get('/title/create', titleController.create);
router.get('/title/read', titleController.read);
router.get('/title/delete', titleController.delete);
router.get('/title/update', titleController.update);

module.exports = router;
