// Create a web server that listens for requests on port 3000, and serves the comments.json file when the path is /comments

// Import the http module
const http = require('http');

// Import the fs module
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header to serve JSON
  res.setHeader('Content-Type', 'application/json');

  // Read the comments.json file and serve it as a response
  fs.readFile('./comments.json', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.end(data);
    }
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});