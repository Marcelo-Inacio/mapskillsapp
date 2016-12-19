(function() {
	'use strict';

	angular
	.module('mapskill')
	.controller('AdminSkillsController', AdminSkillsController);

	/** @ngInject */
	function AdminSkillsController() {
		var vm = this;

		(function() {
			console.log('entrou aqui');
		})();
	}

})();