window.publication =  angular.module('administrator', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.bootstrap', 
                                                       'ngRoute', 'chart.js', 'mapSkillsControllers']);

publication.config(function($routeProvider){
	
	var path = '../../html/admin/view/';
	$routeProvider
	
	.when('/index', {
		templateUrl: path + 'index.view.html',
		controller: 'IndexController'
	})
	
	.when('/institutions', {
		templateUrl: path + 'institutions.view.html',
		controller: 'InstitutionsController'
	})
	
	.when('/themes', {
		templateUrl: path + 'themes.view.html',
		controller: 'ThemesController'
	})
	
	.when('/skills', {
		templateUrl: path + 'skills.view.html',
		controller: 'SkillsController'
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