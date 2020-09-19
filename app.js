(function (){
	'use strict';
	angular.module('LunchValidator',[])
	.controller('LunchValidatorController', function($scope){
		$scope.name = "";
		$scope.Output = "";

		$scope.ValidateLunch = function(){
			if($scope.name === "")
				$scope.Output = "Please enter data first";
			else
			{
				var totalNameValue = CheckLunch($scope.name);
				$scope.Output = totalNameValue;
			}
		};

		function CheckLunch(string){
			var totalV = string.split(",");
			if(totalV.length <= 3)
				return "Enjoy!";
			return "Too much!";
		};

	});
})();