const app=require('./app')
require('dotenv').config()

let port = process.env.PORT || 8080


app.listen(port, () => {
    console.log('server run success')
})