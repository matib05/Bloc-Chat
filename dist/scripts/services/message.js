(function() {
	function Message($firebaseArray) {
		var Message = { };
		
		var ref = firebase.database().ref().child("Messages");
		Message.messages = $firebaseArray(ref);
		
		Message.getByRoomId = function(roomId) {
			//ref.child().orderByChild(roomId);
			console.log(Message.messages);
		}
		
		return Message;
		
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();