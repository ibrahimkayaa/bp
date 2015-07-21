var app = module.angular("myApp",[])
	.controller("myController",["$scope",function($scope){
		$scope.ttata = function(name){
			window.alert("I wanna go to " + name);
		}

	}]);
