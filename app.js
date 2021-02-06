const http = require('http');
const express = require('express');

const app = express();
// app.use() will be executed for every incoming request
app.use((req, res, next) => {
  console.log('In the middleware!');
  // calling next() will end executing this function and pass to the next middleware
  next();
});
app.use((req, res, next) => {
  console.log('In another middleware!');
});

const server = http.createServer(app);

server.listen(3000); // makes the process running (listening)
