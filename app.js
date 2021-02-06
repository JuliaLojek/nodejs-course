// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// app.use() will be executed for every incoming request
// app.use((req, res, next) => {
//   console.log('In the middleware!');
//   // calling next() will end executing this function and pass the request to the next middleware
//   next();
// });

// parsing request body and calling next() at the end:
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send(
    '<head><title>hello</title></head><body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form></body>'
  );
});

// app.post() will only execute for incoming POST request, we also have app.get(), so with app.post() it will only be accessible througn post requests
app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.send(
    `<head><title>hello</title></head><body><h2>Thank you for adding '${req.body.title}' to the store!</h2></form></body>`
  );
  // res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<head><title>hello</title></head><body><h1>Hello!</h1><a href="/add-product">add product</a></body>');
});

// not needed anymore with express:
// const server = http.createServer(app);
// server.listen(3000); // makes the process running (listening)
// instead we use:
app.listen(3000);
