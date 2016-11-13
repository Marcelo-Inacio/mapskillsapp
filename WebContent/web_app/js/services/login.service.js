publication.factory("loginService", ['$http', '$q', function ($http, $q) {
	
	return {
		logout : _logout,
		validate : _validate
	};
	
	function _logout() {
		StorageHelper.removeItem('Authorization');
		StorageHelper.removeItem('user');
		_validate(null);
	}
	
	function _validate(type) {
        var user = StorageHelper.getItem('user'); //identifica o usuario logado
        
        if(type == null || user.profile === null || type !== user.profile) {
        	document.location.href = '../../../';
        }
        //se não houver identificação ou se não for o tipo informado redireciona para login
    }
	
}]);