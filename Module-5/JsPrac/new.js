const http = require('http');

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello This is Node Js Server!');
    res.end();
};
const server = http.createServer(requestHandler);
server.listen(5500, () => {
});
