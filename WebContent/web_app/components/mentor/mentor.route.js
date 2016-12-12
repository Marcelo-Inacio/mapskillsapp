(function() {
  'use strict';

  angular
    .module('mentor')
    .config(routerMentor);

    /**@ngInject */
    function routerMentor($stateProvider, $urlRouterProvider) {
      $stateProvider
    		.state('index', {
    			url: '/',
    			templateUrl: 'view/index.view.html',
    			controller: 'IndexController'
    		})

    		.state('students', {
    			url: '/students',
    			templateUrl: 'view/students.view.html',
    			controller: 'StudentsController'
    		})

    		.state('statistics', {
    			url: '/statistics',
    			templateUrl: 'view/statistics.view.html',
    			controller: 'StatisticsController'
    		})

    	$urlRouterProvider.otherwise('/');
    }

})();
