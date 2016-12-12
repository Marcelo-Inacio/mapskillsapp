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
    vm.logged = false;

    (function(){
  		if(StorageHelper.getItem('user')){
        vm.logged = true;
      }
  	})();

    vm.logout = function () {
  		LoginService.logout();
      vm.logged = false;
  	}

  }

}
