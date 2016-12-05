window.publication =  angular.module('mentor', ['ngMaterial', 'chart.js','ngMessages', 'ngAnimate', 'ui.bootstrap', 
                                                'ngSanitize', 'ui.route', 'mapSkillsControllers']);

publication.config(function($urlRouterProvider, $stateProvider){
	
	var path = 'view/';
	
	$stateProvider
		.state('index', {
			url: '/index',
			templateUrl: path + 'index.view.html',
			controller: 'IndexController'
		})
		
		.state('students', {
			url: '/students',
			templateUrl: path + 'students.view.html',
			controller: 'StudentsController'
		})
		
		.state('statistics', {
			url: '/statistics',
			templateUrl: path + 'statistics.view.html',
			controller: 'StatisticsController'
		})
	
	$urlRouterProvider.otherwise('/statistics');
	
	
});

publication.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

window.mapSkillsControllers = angular.module('mapSkillsControllers', []);