(function() {
 	function RoomCtrl(Room, $scope) {
		$scope.rooms = Room.all;
		this.title = "ROOMS"
	}

	angular
		.module('blocChat')
		.controller('RoomCtrl', ['Room', '$scope', RoomCtrl]);
})();