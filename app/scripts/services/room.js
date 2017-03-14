(function() {
 	function Room($firebaseArray) {
		var Room = { };
		
		Room.title = "ROOMS ";
		Room.roomTitle = "Hello World!";
		
        var ref = firebase.database().ref().child("rooms");
        Room.rooms = $firebaseArray(ref);

		Room.addRoom = function(name) {
			Room.rooms.$add(name).then(function(ref) {
				var id = ref.key;
				console.log("added record with id " + id);
			});
		};
		
		return Room;

}

angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);

})();