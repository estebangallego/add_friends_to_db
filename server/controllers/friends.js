// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');


// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
  return {

	addfriend: function(req, res){
		console.log('server controller', req.body);
		var friend = new Friend(req.body);
		friend.save(function(err, result){
			if(err){
				console.log('err', err);
			}else{
				console.log('we made it!');
				res.json(result);
				//DON'T FORGET THIS LINE
			}
		})
	},

	get_friends: function(req, res){
		Friend.find({}, function(err, results){
			if(err){
				console.log(err);
			}else{
				// console.log(results);
				res.json(results);
				//INPORTANT
			}
		})
	},

	remove_friend: function(req, res)
	{
		console.log('made it to s controller', req.body);

		var friend = new Friend(req.body);
		friend.remove(function(err, result){
			if(err){
				console.log('err', err);
			}else{
				console.log('we made it!');
				res.json(result);
				//DON'T FORGET THIS LINE
			}
		})

		// friend.remove({_id: req.params.id}, function (err, user){
		//     res.redirect('/');
		// })
	}
  }
})();