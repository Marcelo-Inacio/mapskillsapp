mapSkillsControllers.controller("SideBarMenuController",  function($scope, loginService) {
	
	$scope.goPage = _goPage;
	$scope.logout = _logout;
	
	$scope.user;
	
	$scope.ngclass = [{indexClass : "active"},
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
		$scope.ngclass[lastPage+"Class"] = "";
		$scope.ngclass[page+"Class"] = "active";
		document.location.href = '#/' + page;
	}
	
	_goPage("index");
	
	(function(){
		$scope.user = StorageHelper.getItem('user');
	})();
	
	function _logout() {
		loginService.logout();
	}
	
});