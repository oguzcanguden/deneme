var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.set("Content-Type","application/json");
	res.status(200).send({error: "No parameters."});
});

router.get('/users/list', function(req, res, next) {
	var rObj = {
		"type": "users",
		"function": "list"
	};

	res.set("Content-Type","application/json");
	res.status(200).send(rObj);
});

module.exports = router;
