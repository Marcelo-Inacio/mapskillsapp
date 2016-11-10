var loginApp = angular.module('login', []);

loginApp.controller("LoginController",  function($scope, $http, $q) {
	
	var urlPath = getDefaultUrlPath();
	var userIsLogged = false;

	$scope.userLogin = [];
	
	$scope.login = _login;
	$scope.logout = _logout;
	
	function _login(userLogin) {
		
		console.log(userLogin);
/*		
		//var deferred = $q.defer();
		
        $http({
            method: 'POST',
            url: urlPath + '/login',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            params: {username: usuario.username, password: usuario.password}
        }).
            success(function (data, status, headers, config) {
            	var user = data;
            	StorageHelper.setItem('Authorization', headers("Authorization"));
            	StorageHelper.setItem('user', user);
            	userIsLogged = true;
            	_redirect(user.profile);            	
            }).
            then(function successCallback(response) {
            	//deferred.resolve(response.data);

            }, function errorCallback(response) {
            	alert('erro ao fazer login');
                //deferred.reject("no authentication");
            });
  */     
	}

	
	function _logout() {
		userIsLogged = false;
		StorageHelper.removeItem('Authorization');
		StorageHelper.removeItem('user');
		_validate(null);
	}
	
	function _validate(type) {
        var profile = StorageHelper.getItem('user').profile; //identifica o usuario logado
        
        if(profile == null || type !== profile) {
        	document.location.href = 'login.html';
        }
        //se não houver identificação ou se não for o tipo informado redireciona para login
    }
	
	function _redirect(profile) {
		switch(profile) {
	        case 'ADMINISTRATOR':
	        	document.location.href = 'administrator.html';
	        	break;
	        case 'MENTOR':
	        	document.location.href = 'mentor.html';
	        	break;
	        case 'STUDENT':
	        default:
	        	document.location.href = 'student.html';
	        	break;
		}
	}
	

	
	
});