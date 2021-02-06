// const http = require('http');
const express = require('express');

const app = express();
// app.use() will be executed for every incoming request
// app.use((req, res, next) => {
//   console.log('In the middleware!');
//   // calling next() will end executing this function and pass the request to the next middleware
//   next();
// });
app.use('/users', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<head><title>hello</title></head><body><h1>Users</h1></body>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<head><title>hello</title></head><body><h1>Hello!</h1></body>');
});

// not needed anymore with express:
// const server = http.createServer(app);
// server.listen(3000); // makes the process running (listening)
// instead we use:
app.listen(3000);
