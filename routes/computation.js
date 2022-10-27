var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let x = Math.random()*10;
  let y = Math.random()*90;
  let f1 = Math.atan2(y, x);
  let f2 = Math.atanh(x);
  let f3 = Math.cbrt(x);
  res.render('computation',{title: 'Computation', h1: 'Computing Math functions', x: x, y: y, f1:f1, f2:f2, f3:f3});
  });

module.exports = router;
