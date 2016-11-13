window.publication =  angular.module('student', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.bootstrap', 'ngRoute', 'mapSkillsControllers']);

publication.config(function($routeProvider){
	
	var path = 'view/';
	$routeProvider

	.when('/index', {
		templateUrl: path + 'index.view.html',
		controller: 'IndexController'
	})

	.otherwise({
		redirectTo: '/index'
	});
	
	
});

publication.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

window.mapSkillsControllers = angular.module('mapSkillsControllers', []);