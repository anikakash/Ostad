// initial packages
const express=require('express');
const router=express.Router()

// user related routes are here
const { RegisterUser, LoginUser, ReadUser, UpdateUser } = require('../controllers/userController');
// jsonwebtoken verify middleware
const { authVerify } = require('../middleware/TokenVerify');

router.post('/registeruser', RegisterUser)
router.post('/loginuser', LoginUser)
router.get('/readuser', authVerify, ReadUser)
router.post('/updateuser', authVerify, UpdateUser)

module.exports=router;