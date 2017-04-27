(function() {
	function Message($firebaseArray, $filter, $cookies) {
		var Message = { };
		
		var ref = firebase.database().ref().child("Messages")
		Message.messages = $firebaseArray(ref);
		
		Message.getByRoomId = function(roomId) {
			return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
		};
		
		Message.send = function(newMessage, roomId) {
			var data = {
				content: newMessage,
				username: $cookies.get('blocChatCurrentUser'),
				roomId: roomId,
				sentAt: $filter('date')(new Date(), 'shortTime')
			};

			Message.messages.$add(data);
		};
		
		return Message;
		
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray','$filter', '$cookies', Message]);
})();