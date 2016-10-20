var express = require('express');
var ctrl = express.Router();


var users = [
{
	email: 'defeldbaum@gmail.com',
	password: "blahhhhhh88",
},
{
	email: 'sylmem@aol.com',
	password: "blerggggg"
},
{
	email: 'blfmem@aol.com',
	password: "yooooooo"
}
];

function findUserById(id) {
	var offsetIndex = id - 1;
	return users[offsetIndex];
};


/* GET users listing. */
ctrl.get('/', function(req, res, next) {
	res.json(users);
});

ctrl.get('/:id', function(req, res, next) {
	console.log(req.params);
	var id = parseInt(req.params.id);
	if (typeof id === 'number') {
		res.json(findUserById(id));
	}
	res.json({
		message: 'user not found'
	});
	console.log('ROUTE PARAMS ^^^^^');
	res.json({}); // empty for now
});

module.exports = ctrl;
