(function() {
	'use strict';

	angular
	.module('mapskill')
	.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
				templateUrl: 'web_app/components/main/main.html',
					controller: 'LoginController',
					controllerAs: 'loginCtrl'
			})
			.state('main.login', {
				url: '/login',
				templateUrl: 'web_app/components/login/login.view.html'
			})
			
			.state('student', {
				url: '/student',
				templateUrl: 'web_app/components/student/student.html',
			})
			.state('student.game', {
				url: '/game',
				templateUrl: 'web_app/components/student/view/game.view.html',
//				controller: 'StudentController',
//				controllerAs: 'studentCtrl'
			})
			.state('student.result', {
				url: '/result',
				templateUrl: 'web_app/components/student/view/result.view.html',
//				controller: 'StudentController',
//				controllerAs: 'studentCtrl'
			})
	
			.state('admin', {
				url: '/admin',
				templateUrl: 'web_app/components/admin/admin.html',
			})
			.state('admin.dashboard', {
				url: '/dashboard',
				templateUrl: 'web_app/components/admin/view/dashboard.view.html',
//				controller: 'AdminDashboardController',
//				controllerAs: 'admDashCtrl'
			})
			.state('admin.institutions', {
				url: 'institutions',
				templateUrl: 'web_app/components/admin/view/institutions.view.html',
//				controller: 'AdminInstitutionsController',
//				controllerAs: 'admInstCtrl'
			})
			.state('admin.themes', {
				url: '/themes',
				templateUrl: 'web_app/components/admin/view/themes.view.html',
//				controller: 'AdminThemesController',
//				controllerAs: 'admThemesCtrl'
			})
			.state('admin.skills', {
				url: '/skills',
				templateUrl: 'web_app/components/admin/view/skills.view.html',
//				controller: 'AdminSkillsController',
//				controllerAs: 'admSkillsCtrl'
			})
	
			.state('mentor', {
				url: '/mentor',
				templateUrl: 'web_app/components/mentor/mentor.html',
			})
			.state('mentor.dashboard', {
//				url: '/dashboard',
				templateUrl: 'web_app/components/mentor/view/dashboard.view.html',
//				controller: 'MentorDashboardController',
//				controllerAs: 'mentorDashCtrl'
				
			})
			.state('mentor.students', {
				url: '/students',
				templateUrl: 'web_app/components/mentor/view/students.view.html',
//				controller: 'MentorStudentsController',
//				controllerAs: 'mentorStudentCtrl'
			})
			.state('mentor.statistics', {
				url: '/statistics',
				templateUrl: 'web_app/components/mentor/view/statistics.view.html',
//				controller: 'MentorStatisticsController',
//				controllerAs: 'mentorStatisticsCtrl'
			});
	
		$urlRouterProvider.otherwise('/admin/dashboard');

	}

})();
