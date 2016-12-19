(function() {
  'use strict';

  angular
    .module('mapskill')
    .directive('acmeNavbar', acmeNavbar);
  
  	
  	/** @ngInject */
	function acmeNavbar() {
		
		var directive = {
			restrict: 'AE',
			templateUrl: 'web_app/shared/navbar/navbar.html',
			scope: {
				creationDate: '='
			},
			controller: NavbarController,
			controllerAs: 'vm',
			bindToController: true			
		};
		  
		return directive;
	
		/** @ngInject */
		function NavbarController(LoginService) {
			
			var vm = this;
			vm.user = false;
			  
			(function() {
				vm.user = StorageHelper.getItem('user');
			})();
		  
			vm.logout = function () {
				console.log('saindo..');
				LoginService.logout();
			}
	
		}
	
	}
})();