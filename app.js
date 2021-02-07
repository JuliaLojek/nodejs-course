// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
// app.use() will be executed for every incoming request
// app.use((req, res, next) => {
//   console.log('In the middleware!');
//   // calling next() will end executing this function and pass the request to the next middleware
//   next();
// });

// parsing request body and calling next() at the end:
app.use(bodyParser.urlencoded({ extended: false }));

// order matters:
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
  res.status(404).send('<head><title>oh no :(</title></head><body><h1>Oh no!</h1><h2>There is nothing here...</h2><a href="/">take me to the main page!</a></body>')
})


// not needed anymore with express:
// const server = http.createServer(app);
// server.listen(3000); // makes the process running (listening)
// instead we use:
app.listen(3000);
