const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    '<head><title>hello</title></head><body><form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add product</button></form></body>'
  );
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