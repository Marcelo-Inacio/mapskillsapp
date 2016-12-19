(function() {
	'use strict';

	angular
	.module('mapskill')
	.controller('AdminDashboardController', AdminDashboardController);

	/** @ngInject */
	function AdminDashboardController() {
		var vm = this;

		(function() {
			console.log('entrou aqui');
		})();
	}

})();