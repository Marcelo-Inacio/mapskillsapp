window.publication =  angular.module('login', ['ui.router', 'mapSkillsControllers']);

publication.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'web_app/html/login.view.html',
			controller: 'LoginController'
		})

	$urlRouterProvider.otherwise('/login');
	
}]);


window.mapSkillsControllers = angular.module('mapSkillsControllers', []);
