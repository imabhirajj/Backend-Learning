const http = require('http');
const requestHandler = require('./handler');

const server = http.createServer(requestHandler);

server.listen(7000, () => {
  console.log("Server running on http://localhost:7000");
});
