(function() {
  'use strict';

  angular
    .module('administrator')
    .config(routerAdmin);

    /**@ngInject */
    function routerAdmin($stateProvider, $urlRouterProvider) {
      var path = 'view/';

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

    	$urlRouterProvider.otherwise('/');
    }

})();
