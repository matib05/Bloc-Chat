(function() {
 	function RoomCtrl(Room, $scope) {
		$scope.rooms = Room.all;
		this.title = "rooms"
	}

	angular
		.module('blocChat')
		.controller('RoomCtrl', ['Room', '$scope', RoomCtrl]);
})();