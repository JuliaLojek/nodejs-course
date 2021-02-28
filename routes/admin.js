const path = require('path');
const express = require('express');

const rootDir = require('../helper/path');
// end of imports

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// app.post() will only execute for incoming POST request, we also have app.get(), so with app.post() it will only be accessible througn post requests
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.send(
    `<head><title>hello</title></head><body><h2>Thank you for adding '${req.body.title}' to the store!</h2></form></body>`
  );
  // res.redirect('/');
});

module.exports = router;