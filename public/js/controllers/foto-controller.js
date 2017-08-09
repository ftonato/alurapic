angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

  $scope.foto = {}
	$scope.mensagem = ''

  if ($routeParams.fotoId) {
    $http.get('v1/fotos/'+$routeParams.fotoId)
    .success( function(foto){
      $scope.foto = foto
    })
    .error( function(err) {
      $scope.mensagem = 'Não foi possível obter a foto!'
      console.warn(err)
    })
  }

	$scope.salvar = function() {
    if ($scope.formulario.$valid) {

      if ($scope.foto._id) {
        $http.put('v1/fotos/'+$scope.foto._id, $scope.foto)
        .success( function(fotos){
          $scope.mensagem = 'Foto alterada com sucesso!'

        })
        .error( function(err) {
          $scope.mensagem = 'Não foi possível incluir a foto'
          console.warn(err)
        })

      } else {
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
  }

})
