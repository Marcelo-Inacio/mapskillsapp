(function() {
	'use strict';

	angular
		.module('login')
		.factory('LoginService', ['$http', '$q', LoginService]);

		/** @ngInject */
		function LoginService($http, $q) {
			return {
				logout : _logout,
				validate : _validate
			};

			function _logout() {
				StorageHelper.removeItem('Authorization');
				StorageHelper.removeItem('user');
				StorageHelper.removeItem('page');
				_validate(null);
			}

			function _validate(type) {
        var user = StorageHelper.getItem('user'); //identifica o usuario logado

				//se não houver identificação ou se não for o tipo informado redireciona para login
        if(type == null || user.profile === null || type !== user.profile) {
        	document.location.href = '/';
        }
		  }
		}
})();
