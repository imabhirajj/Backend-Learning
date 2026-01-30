const http = require('http');

const requesthandler = require('./handler');
const server = http.createServer(requesthandler);

const port = 7000;
server.listen(port,() => {
  console.log(`Serving running on address http://localhost:${port}`);
}) ;