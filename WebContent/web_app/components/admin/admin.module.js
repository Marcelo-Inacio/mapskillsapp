(function() {
	'use strict';

	angular
		.module('administrator', ['ngMaterial', 'chart.js','ngMessages', 'ngAnimate', 'ui.bootstrap', 'ngSanitize', 'ui.router']);

})();

(function() {
  'use strict';

	angular
		.module('administrator')
    .config(function($mdThemingProvider) {
        // Configure a dark theme with primary foreground yellow
        $mdThemingProvider.theme('docs-dark', 'default')
          .primaryPalette('yellow')
          .dark();
      })
})();
