const http = require("http");

// create an HTTP server

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome to the Node.js!\n");
});
//listen on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
