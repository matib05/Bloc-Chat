(function() {
 	function RoomCtrl($scope, Room, $uibModal, Message
					  ) {
		$scope.rooms = Room.rooms;
		$scope.messages = Message.getByRoomId('-Kf4xlH4nsOr3a4Rz3rd');
		this.clicking = Room;
		this.title = Room.title;
		
		$scope.roomTitle = "Hello World!";
		
		this.roomClick = function(roomName) {
			$scope.roomTitle = roomName;
		}
		
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
		.controller('RoomCtrl', ['$scope', 'Room', '$uibModal', 'Message', RoomCtrl]);
})();