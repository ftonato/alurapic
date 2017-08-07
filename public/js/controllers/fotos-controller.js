angular.module('alurapic').controller('FotosController', function($scope, $http) {
	let serverURL = 'v1/fotos'

	$scope.fotos = []
	$scope.filtro = ''

	$http.get(serverURL)
	.success( function(fotos){
		$scope.fotos = fotos;
	})
	.error( function(err) {
		console.warn(err)
	})
})
