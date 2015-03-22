angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	var map;
    function initialize() {
        var mapOptions = {
          center: {lat: 45.464043639235996, lng:9.190750122070312},
          zoom: 14
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
		
		navigator.geolocation.getCurrentPosition(function(pos) {
		  var latlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
		  map.setCenter(latlng);
		});
    }
	// Stop the side bar from dragging when mousedown/tapdown on the map
	google.maps.event.addDomListener(document.getElementById('map-canvas'), 'mousedown', function(e) {
	  e.preventDefault();
	  return false;
	});
	//google.maps.event.addDomListener(window, 'load', initialize);
	initialize();
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
