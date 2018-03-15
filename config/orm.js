var connection = require("./connection.js");


var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM' + tableInput + ';', function(err,result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function(table, vals, cb) {
	  connection.query('INSERT INTO ' + table + " (burger_name) VALUES ('" + vals + "');", function(err, result) {
	    if (err) {
	      throw err;
	    }
	    cb(result);
	  });
	},
	// An example of objColVals would be {name: panther, sleepy: true}
	update: function(table,condition, cb) {
	  connection.query('UPDATE ' + table + 'SET devoured=true WHERE id=' + condition + ';', function(err, result) {
	    if (err) {
	      throw err;
	    }
	    cb(result);
	  });
	}
}

module.exports = orm;