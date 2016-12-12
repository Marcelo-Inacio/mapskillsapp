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
      });;

    $urlRouterProvider.otherwise('/login');

  }

})();
