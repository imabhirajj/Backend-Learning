const SumHandler = (req, res) => {
  console.log("Inside sum request", req.url);

  const body = [];

  // 1️⃣ collect chunks
  req.on('data', (chunk) => {
    body.push(chunk);
  });

  // 2️⃣ when all data received
  req.on('end', () => {
    const fullBody = Buffer.concat(body).toString();
    // example: first=10&second=20

    const params = new URLSearchParams(fullBody);
    const first = Number(params.get('first'));
    const second = Number(params.get('second'));

    const sum = first + second;

    // 3️⃣ send response AFTER calculation
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <body>
          <h1>Sum Result</h1>
          <p>The sum is: ${sum}</p>
          <a href="/calculator">Go Back to Calculator</a>
        </body>
      </html>
    `);
    res.end();
  });
};

module.exports = SumHandler;
