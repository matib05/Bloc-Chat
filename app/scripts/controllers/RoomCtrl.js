(function() {
 	function RoomCtrl($scope, Room, $uibModal) {
		$scope.rooms = Room.rooms;
		this.clicking = Room;
		this.title = Room.title;
		
		this.open = function () {
			var modalInstance = $uibModal.open({
				templateUrl: '/templates/modal.html'
			});
		};
		
		this.createRoom = function() {
			var roomName = document.getElementById('roomName').value;
			console.log(roomName);
			Room.addRoom(roomName);
		}
	}

	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope', 'Room', '$uibModal', RoomCtrl]);
})();