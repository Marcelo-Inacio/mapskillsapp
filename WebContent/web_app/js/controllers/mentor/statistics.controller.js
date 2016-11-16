mapSkillsControllers.controller("StatisticsController",  function($scope) {


	$scope.skills = ['liderança', 'visao', 'trab em equipe'];
	$scope.courses = ['Banco de dados', 'Logistica', 'GPI', 'Aeronautica', 'Estruturas'];
	
	$scope.skillCurrent = 'liderança';
	$scope.courseCurrent = 'Banco de dados';
	
	$scope.myInterval = null;
	$scope.noWrapSlides = true;
	$scope.active = 0;
	var slides = $scope.slides = [];
	var currIndex = 0;

	$scope.addSlide = function(type) {
		//var newWidth = 600 + slides.length + 1;
		slides.push({
			skill: type,
			id: currIndex++
		});
	};

	$scope.randomize = function() {
		var indexes = generateIndexesArray();
		assignNewIndexesToSlides(indexes);
	};

	for (var i = 0; i < 3; i++) {
		$scope.addSlide($scope.skills[i]);
	}

	// Randomize logic below

	function assignNewIndexesToSlides(indexes) {
		for (var i = 0, l = slides.length; i < l; i++) {
			slides[i].id = indexes.pop();
		}
	}

	function generateIndexesArray() {
		var indexes = [];
		for (var i = 0; i < currIndex; ++i) {
			indexes[i] = i;
		}
		return shuffle(indexes);
	}

	
	$scope.labels = ['Aluno A', 'Aluno B', 'Aluno C', 'Aluno D', 'Aluno E', 'Aluno F', 'Aluno G'];
    $scope.series = ['Series A'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
    ];

});