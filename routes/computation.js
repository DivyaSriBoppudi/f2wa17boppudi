var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let x = Math.random()*10;
  let y = Math.random()*90;
  let f1 = Math.atan2(y, x);
  let f2 = Math.atanh(x);
  let f3 = Math.cbrt(x);
  res.send(`<title>Computation</title><h1>Computing Math functions</h1><b style="color: red">atan2(y, x)</b> applied to <i style="color: blue">${x}</i>
   and <i style="color: blue">${y}</i>  is  <i style="color: orange">${f1}</i><br><br>
   <b style="color: red">atanh(x)</b> applied to <i style="color: blue">${x}</i>  is  <i style="color: orange">${f2}</i><br><br>
   <b style="color: red">cbrt(x)</b> applied to <i style="color: blue">${x}</i>  is  <i style="color: orange">${f3}</i>`);
  });

module.exports = router;
