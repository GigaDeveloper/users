var express = require('express');
var router = express.Router();
var urs = require('../users.json');
var user;

router.get('/', function(req, res, next) {

	urs.usersList.forEach(function(item){
		if ( item.userId == req.param("id") ) {
			user = item;
		}
	});

	res.render('user', {
  		title: 'User information!..',
  		body: 'This is user information.',
  		id: req.param("id"),
  		user: user
  	});
});

module.exports = router;
