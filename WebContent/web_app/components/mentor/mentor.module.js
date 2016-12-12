/** Modulo da aplicação */
(function() {
	'use strict';

	angular
		.module('mentor', ['ngMaterial', 'chart.js','ngMessages', 'ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ui.route']);

})();

(function() {
  'use strict';

	angular
		.module('mentor')
    .config(function($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
          .primaryPalette('yellow')
          .dark();
      })
})();
