const path = require('path');
const express = require('express');

const rootDir = require('../helper/path');
const adminData = require('./admin');
// end of imports

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  // sending html file:
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // compiling and sending pug file:
  res.render('shop');
});

module.exports = router;
