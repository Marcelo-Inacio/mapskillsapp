window.publication =  angular.module('administrator', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.bootstrap', 
                                                       'ngRoute', 'chart.js', 'mapSkillsControllers']);

publication.config(function($routeProvider){
	
	var path = 'web_app/html/admin/view/';
	$routeProvider
	
	.when('/index', {
		templateUrl: path + 'index.view.html',
		controller: 'AdminController'
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

window.onAuctionControllers = angular.module('mapSkillsControllers', []);