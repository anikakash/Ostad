// Import the http and fs modules
const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Get the request url
    const url = req.url;

    // Set the response header to plain text
    res.setHeader('Content-Type', 'text/plain');

    // Handle different urls
    if (url === '/') {
        // Write the home page message
        res.write('This is Home Page');
    } else if (url === '/about') {
        // Write the about page message
        res.write('This is About Page');
    } else if (url === '/contact') {
        // Write the contact page message
        res.write('This is Contact Page');
    } else if (url === '/file-write') {
        // Write a file using fs.writeFile()
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                // Write an error message if there is any
                res.write('Error writing file: ' + err.message);
            } else {
                // Write a success message if the file is written
                res.write('File written successfully');
            }
        });
    } else {
        // Write a not found message for any other url
        res.write('Page not found');
    }

    // End the response
    res.end();
});

// Listen on port 3000
server.listen(3000, () => {
    // Log a message to the console when the server starts listening
    console.log('Server listening on port 3000');
});
