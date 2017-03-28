(function() {
 	function RoomCtrl($scope, Room, $uibModal, Message) {
		$scope.rooms = Room.rooms;
		
		this.clicking = Room;
		this.title = Room.title;
		
		$scope.roomTitle = "Hello! Select a room on the left panel";
		
		this.roomClick = function(room) {
			this.room = room;
			$scope.roomTitle = room.$value;
			$scope.messages = Message.getByRoomId(room.$id);
			console.log($scope.messages);
			
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
			$close();
		}
		
		
		
		
	}

	angular
		.module('blocChat')
		.controller('RoomCtrl', ['$scope', 'Room', '$uibModal', 'Message', RoomCtrl]);
})();