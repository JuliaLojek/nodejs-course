const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<head><title>hello</title></head><body><h1>Hello!</h1><a href="/admin/add-product">add product</a></body>');
});

module.exports = router;