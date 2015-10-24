var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', body: 'This is "Express", nodejs web framework!..' });
});

module.exports = router;
