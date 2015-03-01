var friends = require('./../server/controllers/friends.js');

module.exports = function(app) {
	app.get('/friends', function(req, res) {
	  friends.show(req, res);
	});

	app.post('/addfriend', function(req, res){
		// console.log('routes', req.body);
		friends.addfriend(req, res);
	});

	app.get('/get_friends', function(req, res){
		friends.get_friends(req, res);
	})

	app.post('/remove_friend', function(req, res){
		console.log('made it to routes', req.body);
		friends.remove_friend(req, res);
	})
}