(function() {
	'use strict';

	angular
		.module('student')
		.factory('StudentService', ['$http', '$q', StudentService]);

		/** @ngInject */
		function StudentService($http, $q) {
			return {
				sendAnswer : _sendAnswer
			};
			
			
			/** realiza uma post ao back end enviando um contexto 'student_question_event'*/
			function _sendAnswer(answerContext) {
				console.error(context);
				var deferred = $q.defer();

			    $http({
			        method: 'POST',
			        url: urlPath + '/sendStudentAnswer',
			        headers: {'Content-Type': 'application/json'},
			        data: answerContext
			    })
				.success(function (data, status, headers, config) {

				})
				.then(function successCallback(response) {
			      	//deferred.resolve(response.data);
			      	//console.log(response.data);
	      		},
	      		function errorCallback(response) {
	      			alert('erro ao enviar resposta');
			     	//deferred.reject("no authentication");
	      		});
			}

			
		}
})();
