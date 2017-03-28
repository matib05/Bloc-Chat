(function() {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		
		if (!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '/templates/bloc-chat-cookies.html',
				controller: 'CookieCtrl',
				controllerAs: 'cook'
			});
		}
		
	}
	
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();