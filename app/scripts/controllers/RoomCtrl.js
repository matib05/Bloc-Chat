(function() {
 	function RoomCtrl(Room) {
		this.$scope = Room.all;
	}

	angular
		.module('blocChat')
		.controller('RoomCtrl', ['Room', RoomCtrl]);
})();