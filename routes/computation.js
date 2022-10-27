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

  router.get('/:id', function(req, res, next) {
    let y = Math.random()*90;
    let f1 = Math.atan2(y, req.params.id);
    let f2 = Math.atanh(req.params.id);
    let f3 = Math.cbrt(req.params.id);
    res.render('computation',{title: 'Computation', h1: 'Computing Math functions', x: req.params.id, y: y, f1:f1, f2:f2, f3:f3});
    });
    router.get('/:id/:id1', function(req, res, next) {
      let f1 = Math.atan2(req.params.id1, req.params.id);
      let f2 = Math.atanh(req.params.id);
      let f3 = Math.cbrt(req.params.id);
      res.render('computation',{title: 'Computation', h1: 'Computing Math functions', x: req.params.id, y: req.params.id1, f1:f1, f2:f2, f3:f3});
      });
module.exports = router;
