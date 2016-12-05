window.publication =  angular.module('administrator', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.bootstrap', 
                                                       'ui.router', 'chart.js', 'mapSkillsControllers']);

publication.config(function($urlRouterProvider, $stateProvider){
	
	var path = '../../html/admin/view/';
	
	$stateProvider
		.state('dashbord', {
			url: '/dashbord',
			templateUrl: path + 'dashbord.view.html',
			controller: 'IndexController'
		})
		
		.state('institutions', {
			url: '/institutions',
			templateUrl: path + 'institutions.view.html',
			controller: 'InstitutionsController'
		})
		
		.state('themes', {
			url: '/themes',
			templateUrl: path + 'themes.view.html',
			controller: 'ThemesController'
		})
		
		.state('skills', {
			url: '/skills',
			templateUrl: path + 'skills.view.html',
			controller: 'SkillsController'
		})
	
	$urlRouterProvider.otherwise('/index');
	
	
});

publication.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

window.mapSkillsControllers = angular.module('mapSkillsControllers', []);