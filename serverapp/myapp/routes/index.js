var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function(req, res, next) {
  res.render('index', { pagetitle: 'Our Farm Stand' });
});
module.exports = router;