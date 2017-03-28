(function() {
	function CookieCtrl($uibModalInstance, $cookies) {
		this.createUsername = function() {
			var reWhiteSpace = new RegExp(/^\s+$/);
			var Username = document.getElementById('username').value;
			if (Username !== "" && !(reWhiteSpace.test(Username))) {
				console.log(Username);
				$cookies.put('blocChatCurrentUser', Username);
				$uibModalInstance.close('valid username entered');
			}
			else {
				document.getElementById('hidden').innerHTML = "You did not enter a valid username".fontcolor('red');
			}
			
		}
	}
	
	angular
		.module('blocChat')
		.controller('CookieCtrl', ['$uibModalInstance', '$cookies', CookieCtrl]);
})();