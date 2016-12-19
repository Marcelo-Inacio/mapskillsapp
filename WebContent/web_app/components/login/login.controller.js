(function() {
	'use strict';

	angular
		.module('login')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController(LoginService) {
		var vm = this;
		var urlPath = getDefaultUrlPath();
		var userIsLogged = false;

		vm.userLogin = {username: null, password: null};
		
		/** realiza login na aplicação */
		vm.login = function (login) {
			if(login.username == null || login.password == null) {
				alert('invalid');
				return;
			}
			var json = JSON.stringify(login);

			LoginService.login(json);
			
		}
		/** realiza logout na aplicação, limpando os registros do usuario*/
		vm.logout = function () {
			LoginService.logout();
		}

	}

})();
