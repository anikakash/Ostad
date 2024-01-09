const express=require('express');
const router=express.Router()

const { AllBrand, AllProducts, BrandById } = require('../controllers/productController');

router.get('/allbrand', AllBrand)
router.get('/brandbyid/:id', BrandById)
router.get('/allproducts', AllProducts)

module.exports=router;