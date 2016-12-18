(function() {
  'use strict';

  angular
    .module('mapskill')
    .config(routerConfig);

    /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
	    $stateProvider
	      .state('login', {
	        url: '/',
	        templateUrl: 'web_app/components/login/login.html',
	      })
	      .state('login.view', {
	        url: 'login',
	        templateUrl: 'web_app/components/login/login.view.html',
	        controller: 'LoginController',
	        controllerAs: 'vm'
	      })
	      .state('student', {
			url: '/student',
			templateUrl: 'web_app/components/student/student.html',
	      })
	      .state('student.game', {
			url: '/game',
			templateUrl: 'web_app/components/student/view/game.view.html',
			controller: 'StudentController',
			controllerAs: 'vm'
	      })
	      .state('admin', {
			url: '/admin',
			templateUrl: 'web_app/components/admin/admin.html',
	      });
	
	    $urlRouterProvider.otherwise('/login');

  }

})();
