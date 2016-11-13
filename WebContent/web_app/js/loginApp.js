window.publication =  angular.module('login', ['ngRoute', 'mapSkillsControllers']);

publication.config(['$routeProvider', function ($routeProvider) {
	
	$routeProvider

	.when('/login', {
		templateUrl: 'web_app/html/login.view.html',
		controller: 'LoginController'
	})

	.otherwise({
		redirectTo: '/login'
	});
	
}]);


window.mapSkillsControllers = angular.module('mapSkillsControllers', []);
