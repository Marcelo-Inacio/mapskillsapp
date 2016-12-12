window.publication =  angular.module('student', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.bootstrap', 'ui.router', 
                                                 'mapSkillsControllers']);

publication.config(function($urlRouterProvider, $stateProvider){
	
	var path = '../../html/student/view/';
	
	$stateProvider
		.state('game', {
			url: '/game',
			templateUrl: path + 'game.view.html',
			controller: 'GameController'
		})
	
	$urlRouterProvider.otherwise('/game');
	
	
});

publication.config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

window.mapSkillsControllers = angular.module('mapSkillsControllers', []);