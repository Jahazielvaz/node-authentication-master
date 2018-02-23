var express = require('express');
var router = express.Router();

module.exports = function(passport){
	router.post('/signup', function(req, res){
		res.send('got the signup request')
	});

	return router;
}