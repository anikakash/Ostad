// initial packages
const express=require('express');
const app=express()
const mongoose=require('mongoose')
require('dotenv').config()

// extra packages
const cors=require('cors')

// different routers imported
const userRouter = require('./src/routes/userRoute');
const productRouter = require('./src/routes/productRoute')

// using all packages
app.use(express.json())
app.use(cors())

// connecting with mongoDB compass
let url = process.env.url;

mongoose.connect(url)


// user related router
app.use('/user/api/v1', userRouter)

app.use('/product/api/v1', productRouter)






module.exports=app;