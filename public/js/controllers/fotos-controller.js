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

  $scope.deletar = function(foto) {
    $http.delete('v1/fotos/' + foto._id)
    .success( function(fotos){

      var indexFoto = $scope.fotos.indexOf(foto)
      $scope.fotos.splice(indexFoto, 1)

      $scope.mensagem = 'Foto deletada com sucesso!'

    })
    .error( function(err) {
      $scope.mensagem = 'Não foi possível deletar a foto'
      console.warn(err)

    })
  }
})
