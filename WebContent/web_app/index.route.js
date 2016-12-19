(function() {
	'use strict';

	angular
	.module('mapskill')
	.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('account', {
				url: '/account',
				templateUrl: 'web_app/components/login/login.html'
			})
			.state('account.login', {
				url: '/login',
				templateUrl: 'web_app/components/login/login.view.html',
				controller: 'LoginController',
				controllerAs: 'vm'
			})
			
			.state('student', {
				url: '/student',
				templateUrl: 'web_app/components/student/student.html',
				//controller: 'StudentController',
				//controllerAs: 'vm'
			})
			.state('student.game', {
				url: '/game',
				templateUrl: 'web_app/components/student/view/game.view.html',
				controller: 'StudentController',
				controllerAs: 'vm'
			});/*
			.state('student.result', {
				url: '/result',
				templateUrl: 'web_app/components/student/view/result.view.html',
				//controller: 'StudentController',
				//controllerAs: 'vm'
			})
	
			.state('admin', {
				url: '/admin',
				templateUrl: 'web_app/components/admin/admin.html',
			})
			.state('admin.dashboard', {
				url: '/dashboard',
				templateUrl: 'web_app/components/admin/view/dashboard.view.html',
				controller: 'AdminDashboardController',
				controllerAs: 'vm'
			})
			.state('admin.institutions', {
				url: '/institutions',
				templateUrl: 'web_app/components/admin/view/institutions.view.html',
				//controller: 'InstitutionsController'
			})
			.state('admin.themes', {
				url: '/themes',
				templateUrl: 'web_app/components/admin/view/themes.view.html',
				//controller: 'ThemesController'
			})
			.state('admin.skills', {
				url: '/skills',
				templateUrl: 'web_app/components/admin/view/skills.view.html',
				//controller: 'SkillsController'
			})
	
			.state('mentor', {
				url: '/mentor',
				templateUrl: 'web_app/components/mentor/mentor.html',
			})
			.state('mentor.dashboard', {
				url: '/dashboard',
				templateUrl: 'web_app/components/mentor/view/dashboard.view.html',
				controller: 'MentorDashboardController',
				controllerAs: 'vm'
				
			})
			.state('mentor.students', {
				url: '/students',
				templateUrl: 'web_app/components/mentor/view/students.view.html',
				//controller: 'StudentsController'
			})
			.state('mentor.statistics', {
				url: '/statistics',
				templateUrl: 'web_app/components/mentor/view/statistics.view.html',
				//controller: 'StatisticsController'
			});*/
	
			$urlRouterProvider.otherwise('/account/login');

	}

})();
