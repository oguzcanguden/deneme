var express = require('express');
var router = express.Router();
var conf = require('./../custom_modules/config');
var config = new conf().config;

var renderObj = {
  	csspath: config.server.http_prefix + "css." + config.server.domain + ":" + config.server.port,
  	jspath: config.server.http_prefix + "js." + config.server.domain + ":" + config.server.port,
  	imagespath: config.server.http_prefix + "images." + config.server.domain + ":" + config.server.port
   }
   
/* GET home page. */
router.get('/', function(req, res, next) {
	renderObj.title = "Mainpage - " + config.server.name;
	res.render('index', renderObj);
});

module.exports = router;