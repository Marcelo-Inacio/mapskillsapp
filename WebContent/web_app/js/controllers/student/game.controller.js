mapSkillsControllers.controller("GameController",  function($scope) {

	var hover = document.getElementById("over");
	
	$scope.playhover = function () {
		console.log('sobre');
		hover.currentTime=0;
		hover.play();
	}
	
	$scope.infoout = function () {
		console.log('fora');
		var opic = document.getElementById("infobox");
		opic.className="infoclose";
	}
	
});