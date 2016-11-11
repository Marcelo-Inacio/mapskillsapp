mapSkillsControllers.controller("SideBarMenuController",  function($scope) {
	
	$scope.goPage = _goPage;
	
	$scope.ngclass = [{indexClass : "active"},
	                  {institutionsClass : ""},
	                  {themesClass : ""},
	                  {skillsClass : ""}];
	
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
	
});