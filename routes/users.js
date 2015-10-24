var express = require('express');
var router = express.Router();
var urs = require('../users.json');

router.get('/', function(req, res, next) {
  res.render('users', {
  		title: 'Users Page',
  		body: 'This is users page!..',
  		users: urs
  	});
});

module.exports = router;
