window.publication =  angular.module('mentor', ['ngMaterial', 'chart.js','ngMessages', 'ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ngRoute', 'mapSkillsControllers']);

publication.config(function($routeProvider){
	
	var path = 'view/';
	$routeProvider

	.when('/index', {
		templateUrl: path + 'index.view.html',
		controller: 'IndexController'
	})
	
	.when('/students', {
		templateUrl: path + 'students.view.html',
		controller: 'StudentsController'
	})
	
	.when('/statistics', {
		templateUrl: path + 'statistics.view.html',
		controller: 'StatisticsController'
	})

	.otherwise({
		redirectTo: '/statistics'
	});
	
	
});

publication.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

window.mapSkillsControllers = angular.module('mapSkillsControllers', []);