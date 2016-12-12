(function() {
	'use strict';

	angular
		.module('mapskill')
		.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController(LoginService) {
		var vm = this;
		var urlPath = getDefaultUrlPath();
		var userIsLogged = false;

		vm.userLogin = {username: null, password: null};

		vm.login = _login;
		vm.logout = _logout;

		function _login(login) {
			if(login.username == null || login.password == null) {
				alert('invalid');
				return;
			}
			console.log(login);
/*			var json = JSON.stringify(userLogin);
			console.log(json);

			//var deferred = $q.defer();

	    $http({
	        method: 'POST',
	        url: urlPath + '/login',
	        headers: {'Content-Type': 'application/json'},
	        data: json
	        //params: {username: usuario.username, password: usuario.password}
	    })
			.success(function (data, status, headers, config) {
        	var user = data;
        	//StorageHelper.setItem('Authorization', headers("Authorization"));
        	StorageHelper.setItem('user', user);
        	userIsLogged = true;
        	_redirect(user.profile);
      })
			.then(function successCallback(response) {
			      	//deferred.resolve(response.data);
			      	//console.log(response.data);
      			},
						function errorCallback(response) {
		      		alert('erro ao fazer login');
		          //deferred.reject("no authentication");
      			}); */
		}

		function _logout() {
			userIsLogged = false;
			LoginService.logout();
			/*StorageHelper.removeItem('Authorization');
			StorageHelper.removeItem('user');
			_validate(null);*/
		}

		function _redirect(profile) {
			switch(profile) {
				case 'ADMINISTRATOR':
					document.location.href = 'web_app/html/admin/administrator.html';
		      break;
		    case 'MENTOR':
		      document.location.href = 'web_app/html/mentor/mentor.html';
		      break;
		    case 'STUDENT':
		    default:
		      document.location.href = 'web_app/html/student/student.html';
		      break;
			}
		}

	}

})();
