(function() {
	'use strict';

	angular
		.module('mentor')
		.controller('StatisticsController', StatisticsController);

		/** @ngInject */
		function StatisticsController($scope) {
			var vm = this;

			$scope.institution = [
				{
					name: 'banco',
					students: ['Aluno A', 'Aluno B', 'Aluno C', 'Aluno D', 'Aluno E', 'Aluno F', 'Aluno G'],
					skills:[
						{type: 'trab em equipe', values: [35, 25, 15, 20, 30, 32, 40]},
						{type: 'liderança', values: [30, 35, 15, 27, 20, 24, 31]},
						{type: 'gestão de tempo', values: [18, 17, 25, 31, 27, 15, 15]}
					]
			    },
				{
					name: 'gpi',
					students: ['Aluno A', 'Aluno B', 'Aluno C', 'Aluno D', 'Aluno E', 'Aluno F', 'Aluno G'],
					skills:[
						{type: 'trab em equipe', values: [15, 30, 18, 20, 22, 24, 19]},
						{type: 'liderança', values: [35, 30, 27, 25, 14, 22, 23]},
						{type: 'gestão de tempo', values: [10, 30, 35, 28, 29, 18, 14]}
					]
			    },
				{
					name: 'manutenção',
					students: ['Aluno A', 'Aluno B', 'Aluno C', 'Aluno D', 'Aluno E', 'Aluno F', 'Aluno G'],
					skills:[
						{type: 'trab em equipe', values: [40, 35, 27, 35, 38, 39, 39]},
						{type: 'liderança', values: [28, 28, 29, 25, 14, 30, 35]},
						{type: 'gestão de tempo', values: [15, 22, 31, 32, 12, 15, 26]}
					]
			    }

		    ];
			$scope.selectedCourse = null;

			/**
			 * Configuração div id=carousel
			 */
			$scope.myInterval = null;
			$scope.noWrapSlides = true;
			$scope.active = 0;

			$scope.slides = [];

			$scope.addSlide = function(c, index) {
				$scope.slides.push({
					course: c,
					id: index
				});
			};

			for (var index = 0; index < $scope.institution.length; index++) {
				$scope.addSlide($scope.institution[index], index);
			}
		}

})();
