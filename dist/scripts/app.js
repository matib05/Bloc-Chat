(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		
		$stateProvider
			.state('room', {
				url: '/',
				controller: 'RoomCtrl',
				templateUrl: '/templates/room.html'
			});
	}
	
	angular
		.module('blocChat', ['ui.router', 'firebase'])
		.config(config);
})();