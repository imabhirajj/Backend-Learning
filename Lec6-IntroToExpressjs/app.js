const http = require('http');
const express = require('express');


const requestHandler = require('./user');
const app = express();
app.get("/", (req,res,next) =>{
  console.log("Came in first middleware", req.url, req.method);
  res.send('<h1>Hello from Expressjs</h1>');
  next();
})

app.post ("/submit-details", (req,res,next) =>{
  console.log("Came in second middleware", req.url, req.method);
  res.send('<h1>Hello from Second Middleware</h1>'); 
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
}); 