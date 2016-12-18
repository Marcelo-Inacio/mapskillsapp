(function() {
	'use strict';

	angular
		.module('login')
		.factory('LoginService', ['$http', '$q', LoginService]);

		/** @ngInject */
		function LoginService($http, $q) {
			return {
				login : _login,
				logout : _logout,
				validate : _validate,
				isLogged : _isLogged
			};

			var userIsLogged = false;
			
			/** realiza uma chamada ao back end para autenticar o login*/
			function _login(login) {
				console.error(login);
				var deferred = $q.defer();

			    $http({
			        method: 'POST',
			        url: getDefaultUrlPath() + '/login',
			        headers: {'Content-Type': 'application/json'},
			        data: login
			        //params: {username: usuario.username, password: usuario.password}
			    })
				.success(function (data, status, headers, config) {
		        	var user = data;
		        	//StorageHelper.setItem('Authorization', headers("Authorization"));
		        	StorageHelper.setItem('user', user);
		        	userIsLogged = true;
		        	redirect(user.profile);
				})
				.then(function successCallback(response) {
			      	//deferred.resolve(response.data);
			      	//console.log(response.data);
	      		},
	      		function errorCallback(response) {
	      			alert('erro ao fazer login');
			     	//deferred.reject("no authentication");
	      		});
			}

			function _logout() {
				StorageHelper.removeItem('Authorization');
				StorageHelper.removeItem('user');
				StorageHelper.removeItem('page');
				userIsLogged = false;
				validate(null);
			}
			
			function _isLogged() {
				return userIsLogged;
			}
			/** identifica o usuario logado */
			function _validate(profile) {
		        var user = StorageHelper.getItem('user');
		        
				/** se não houver identificação ou se não for o perfil informado redireciona para login */
		        if(profile == null || user.profile === null || profile !== user.profile) {
		        	document.location.href = '/login';
		        }
			}
			/**  */
			function redirect(profile) {
				switch(profile) {
					case 'ADMINISTRATOR':
						document.location.href = '#/admin';
						break;
				    case 'MENTOR':
				    	document.location.href = '#/mentor';
				    	break;
				    case 'STUDENT':
				    	document.location.href = '#/game';
				    	break;
				    default:
				      document.location.href = '#/login';
				      break;
				}
			}
		}
})();
