angular.module('alurapic').controller('FotoController', function($scope){

	$scope.foto = {}

	$scope.salvar = function() {
		console.log($scope.foto)
	}
})
