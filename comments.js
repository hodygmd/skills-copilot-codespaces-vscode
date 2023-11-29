// Create web server
// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create a server object
const server = http.createServer((req, res) => {
  // Write the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Write the response body
  res.end('Hello World\n');
});

// Start the server and listen for requests
server.listen(port, hostname, () => {
  // Log a message to the console
  console.log(`Server running at http://${hostname}:${port}/`);
});