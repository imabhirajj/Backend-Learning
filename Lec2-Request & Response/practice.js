const http = require('http');

const server = http.createServer((req,res) => {
  res.setHeader('Content-Type','text/html');

  const navbar = `
      <nav style="background:#222;padding:15px">
      <a href="/" style="color:white;margin-right:15px">Home</a>
      <a href="/men" style="color:white;margin-right:15px">Men</a>
      <a href="/women" style="color:white;margin-right:15px">Women</a>
      <a href="/kids" style="color:white;margin-right:15px">Kids</a>
      <a href="/cart" style="color:white">Cart</a>
    </nav>
  `;

  // Home-Page
   if (req.url === '/') {
    res.write(`
      <html>
        <head><title>Home</title></head>
        <body>
          ${navbar}
          <h1>Welcome to Home Section</h1>
        </body>
      </html>
    `);
    return res.end();
  }

  // Men-Section
  if(req.url === '/men'){
    res.write(`
      <html>
        <head><title>Men</title></head>
        <body>
          ${navbar}
          <h1>Welcome to Men Section</h1>
        </body>
      </html>
    `);
    return res.end();
  }

  // Women-Section
  if(req.url === '/women'){
    res.write(`
      <html>
        <head><title>Women</title></head>
        <body>
          ${navbar}
          <h1>Welcome to Women Section</h1>
        </body>
      </html>
    `);
    return res.end();
  }

  // Kids-Section
  if(req.url === '/kids'){
    res.write(`
      <html>
        <head><title>kids</title></head>
        <body>
          ${navbar}
          <h1>Welcome to Kids Section</h1>
        </body>
      </html>
    `);
    return res.end();
  }

  // Cart
  if(req.url === '/cart'){
    res.write(`
      <html>
        <head><title>Cart</title></head>
        <body>
          ${navbar}
          <h1>Welcome to Cart Section</h1>
        </body>
      </html>
    `);
    return res.end();
  }

  // Default(404)
  res.write(`
      <html>
        <head><title>404</title></head>
        <body>
          ${navbar}
          <h1>Page Not Found</h1>
        </body>
      </html>
    `);
      res.end();
  });

const port = 7000;
server.listen(port,() => {
  console.log(`Serving running on address http://localhost:${port}`);
})