let http = require('http')

let server = http.createServer((req, res)=>{
    res.end("Hello World! Creating Node JS Server");
});

server.listen(5050);

console.log("Server Running on Port 5050")