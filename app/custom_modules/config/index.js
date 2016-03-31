	var fs = require('fs');

	function config(){
		this.config = JSON.parse(fs.readFileSync(__dirname + "/../../../.config", "utf8"));
	}

	module.exports = config;