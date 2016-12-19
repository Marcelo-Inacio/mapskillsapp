(function() {
  'use strict';

  angular
    .module('mapskill', ['ui.router', 'login', 'student', 'mentor', 'admin']);

})();

(function() {
	'use strict';

	angular
		.module('mapskill')
		.directive('acmeNavbar', acmeNavbar);
})();

(function() {
	'use strict';

	angular
		.module('mapskill')
		.directive('acmeSidebar', acmeSidebar);
})();