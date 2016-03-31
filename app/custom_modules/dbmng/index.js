	/* Easy UMS API to DB module */

	var knex = require('knex')({
		client: 'mysql',
		connection: {
			host: 'localhost',
			user: 'your_database_user',
			password: 'your_database_password',
			database: 'myapp_test'
		}
	});
	function dbmng(){

	}

	module.exports = dbmng;