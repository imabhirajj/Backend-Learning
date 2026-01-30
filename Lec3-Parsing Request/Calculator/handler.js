const sumHandler = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  // HOME ROUTE
  if(req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go To Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }

  // CALCULATOR PAGE
  if(req.url === '/calculator' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <body>
          <h1>Calculator</h1>
          <form action="/calculate-result" method="POST">
            <input type="number" name="first" placeholder="First number" />
            <input type="number" name="second" placeholder="Second number" />
            <button type="submit">Sum</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  // CALCULATE RESULT → delegate to sum.js
  if(req.url === '/calculate-result' && req.method === 'POST') {
    return sumHandler(req, res);
  }

  // 404
  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
      <body>
        <h1>404 - Page Not Found</h1>
        <a href="/">Go Home</a>
      </body>
    </html>
  `);
  res.end();
};

module.exports = requestHandler;
