mapSkillsControllers.controller("LoginController",  function($scope, $http, loginService) {
	
	var urlPath = getDefaultUrlPath();
	var userIsLogged = false;

	$scope.userLogin;
	
	$scope.login = _login;
	$scope.logout = _logout;
	
	function _login(userLogin) {
		console.log(userLogin);
		var json = JSON.stringify(userLogin);
		console.log(json);
	
		//var deferred = $q.defer();
		
        $http({
            method: 'POST',
            url: urlPath + '/login',
            headers: {'Content-Type': 'application/json'},
            data: json
            //params: {username: usuario.username, password: usuario.password}
        }).
            success(function (data, status, headers, config) {
            	var user = data;
            	//StorageHelper.setItem('Authorization', headers("Authorization"));
            	StorageHelper.setItem('user', user);
            	userIsLogged = true;
            	_redirect(user.profile);          	
            }).
            then(function successCallback(response) {
            	//deferred.resolve(response.data);
            	//console.log(response.data);

            }, function errorCallback(response) {
            	alert('erro ao fazer login');
                //deferred.reject("no authentication");
            });
       
	}

	
	function _logout() {
		userIsLogged = false;
		loginService.logout();
		/*StorageHelper.removeItem('Authorization');
		StorageHelper.removeItem('user');
		_validate(null);*/
	}
		
	function _redirect(profile) {
		switch(profile) {
	        case 'ADMINISTRATOR':
	        	document.location.href = 'administrator.html';
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
	
});