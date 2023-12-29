const express = require("express")
const app = express()

const router = require("./src/routes/api")

const bodyParser = require("body-parser");
const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const hpp = require("hpp");
const path = require("path")

app.use(bodyParser.json());
app.use(cors());
app.use(mongoSanitize());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});

app.use(limiter);
app.use(helmet());
app.use(hpp());

const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});

const mongoose = require("mongoose");
mongoose
    .connect(process.env.DATABASE)
    .then(()=>console.log("DataBase Connected"))
    .catch((error)=>{
        console.log(error);
    })

app.use("/api", router)

app.get("*", (req, res)=>{
    res.status(404).json({
        status: "Fail",
        Data: "Data Not Found"
    })
})

module.exports = app