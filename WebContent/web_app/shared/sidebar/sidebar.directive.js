function acmeSidebar() {
		
	  var directive = {
	    restrict: 'AE',
	    templateUrl: 'web_app/shared/sidebar/sidebar.html',
	    scope: {
	      creationDate: '='
	    },
	    controller: SidebarController,
	    controllerAs: 'vm',
	    bindToController: true
	  };
	
	  return directive;
	
	  /** @ngInject */
	  function SidebarController() {
		  	var vm = this;
	
		    vm.goPage = _goPage;
		  	vm.user;
		
		  	vm.ngclass = [{dashbordClass : "active"},
		  	                  {institutionsClass : ""},
		  	                  {themesClass : ""},
		  	                  {skillsClass : ""},
		
		  	                  {studentsClass : ""},
		  	                  {statisticsClass : ""}];
		
		  	/**
		  	 * função para ativação do class dos botões de navegação.
		  	 */
		  	function _goPage (page) {
		  		var lastPage = StorageHelper.getItem('page');
		  		StorageHelper.setItem('page', page);
		  		vm.ngclass[lastPage+"Class"] = "";
		  		vm.ngclass[page+"Class"] = "active";
		  		document.location.href = '#/' + page;
		  	}
		
		  	_goPage("dashbord");
		
		  	(function(){
		  		vm.user = StorageHelper.getItem('user');
		  	})();
	
	  }
}
