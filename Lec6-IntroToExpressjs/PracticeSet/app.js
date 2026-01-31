const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
})

app.use((req,res,next) => {
  console.log("Handling / for GET", req.url,req.method);
  next();
})

app.get("/", (req,res,next) => {
  console.log(req.url,req.method);
  res.send('<h1>Hello from Expressjs</h1>');
});

app.get ("/contact-us", (req,res,next) =>{
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send (
    `<h1>Please fill your details</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name"/>
    <input type="email" name="email" placeholder="Enter your email"/>
    <button type="submit">Submit</button>
    </form>
    `);
});

app.post("/contact-us", (req,res) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  console.log(req.body);   
  res.send('<h1>Details Submitted Successfully</h1>');
});


const Port = 7000;
app.listen(Port,() =>{
  console.log(`Server running on address http://localhost:${Port}`);  
})