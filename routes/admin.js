const path = require('path');
const express = require('express');

const rootDir = require('../helper/path');
// end of imports

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', { docTitle: 'Add Product' });
});

// app.post() will only execute for incoming POST request, we also have app.get(), so with app.post() it will only be accessible througn post requests
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  // res.send(
  //   `<head><title>hello</title></head><body><h2>Thank you for adding '${req.body.title}' to the store!</h2></form></body>`
  // );
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
