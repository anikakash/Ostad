const app = require("./app");
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'});


app.listen(5500,()=>{
    console.log("server is running here...................");
});