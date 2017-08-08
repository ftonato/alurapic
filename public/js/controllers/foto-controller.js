angular.module('alurapic').controller('FotoController', function($scope, $http){

  $scope.foto = {}
	$scope.mensagem = ''

	$scope.salvar = function() {
    if ($scope.formulario.$valid) {
  		$http.post('v1/fotos', $scope.foto)
      .success( function(fotos){
        $scope.foto = ''
        $scope.mensagem = 'Foto inserida com sucesso!'

      })
      .error( function(err) {
        $scope.mensagem = 'Não foi possível incluir a foto'
        console.warn(err)

      })
    }
  }
})
