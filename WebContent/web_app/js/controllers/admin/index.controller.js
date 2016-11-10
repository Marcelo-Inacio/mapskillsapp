mapSkillsControllers.controller("IndexController",  function($scope) {
	
	teal();
	orange();
	blue();
	red();
	
	
	$scope.labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"];
	$scope.series = ['Series A', 'Series B', 'Series C'];
	$scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90],
	    [49, 55, 60, 30, 75, 38, 50]
	];
	$scope.onClick = function (points, evt) {
    console.log(points, evt);
	};
	$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	$scope.options = {
	    scales: {
	      yAxes: [
	        {
	          id: 'y-axis-1',
	          type: 'linear',
	          display: true,
	          position: 'left'
	        },
	        {
	          id: 'y-axis-2',
	          type: 'linear',
	          display: true,
	          position: 'right'
	        }
	      ]
	    }
	};

	
	!function ($) {
	    $(document).on("click","ul.nav li.parent > a > span.icon", function(){          
	        $(this).find('em:first').toggleClass("glyphicon-minus");      
	    }); 
	    $(".sidebar span.icon").find('em:first').addClass("glyphicon-plus");
	}(window.jQuery);

	$(window).on('resize', function () {
	  if ($(window).width() > 768) $('#sidebar-collapse').collapse('show')
	})
	$(window).on('resize', function () {
	  if ($(window).width() <= 767) $('#sidebar-collapse').collapse('hide')
	})
	
	
});