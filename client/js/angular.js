// module
var friends_app = angular.module('friends_app', []);

// Factory
friends_app.factory('FriendFactory', function($http) {
  var factory = {};
  var friends = [];

  // note the use of callbacks!
  factory.addFriend = function(info, callback) {
    // console.log('factory', info);
    $http.post('/addfriend', info).success(function(output){
      callback(output);
    })
    // friends.push({name: info.name, age: info.age});
    // console.log(friends);
  }

  factory.get_friends = function(callback){
    $http.get('/get_friends').success(function(output){
      callback(output);
    })
  }

  factory.removeFriend = function(info, callback){
    console.log('factory', info);

    id_info = { _id: info};

    $http.post('/remove_friend', id_info).success(function(output){
      callback(output);
    })
    // $http.post('/removeFriend', info).success(function(output){
    //   callback(output);
    // })
  }


  return factory;
});

// controller
friends_app.controller('FriendsController', function($scope, FriendFactory) {

  // FriendFactory.getFriends(function(data) {
  //   $scope.friends = data;
  // });

  get_friends();

  $scope.addfriend = function() {
    // console.log($scope.new_friend);
    FriendFactory.addFriend($scope.new_friend, function() {
      // console.log($scope.new_friend);
      // console.log(data);
      $scope.new_friend = '';
      get_friends();
    });
  }  

   function get_friends(){
    FriendFactory.get_friends(function(data){
      $scope.friends = data;
    })
  }

  $scope.removeFriend = function(friend){
    console.log('controller', friend._id);
    $scope.friends.splice($scope.friends.indexOf(friend), 1);

    FriendFactory.removeFriend(friend._id, function(){
      friend._id = '';
    })
  
  }

  // $scope.removeFriend = function(friend){
  //   $scope.friends.splice($scope.friends.indexOf(friend), 1);
  // }

})
