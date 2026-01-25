const http = require('http');

const server = http.createServer((req,res)  => {
  console.log(req);
})

const port = 7000;
server.listen(port,() => {
  console.log(`Serving running on address http://localhost:${port}`);
})