var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	res.render('adduser', { title: 'Add User', body: 'Add user page!..'});
});
router.post('/', function(req, res, next) {

	res.render('adduser', { title: 'Add User', body: 'Add user page!..'});
});
module.exports = router;
