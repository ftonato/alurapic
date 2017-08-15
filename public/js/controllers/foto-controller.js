angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $resource, cadastroDeFotos, $routeParams){

  $scope.foto = {}
	$scope.mensagem = ''

  if ($routeParams.fotoId) {
    recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
      $scope.foto = foto
    }, function(err) {
      $scope.mensagem = 'Não foi possível obter a foto!'
      console.warn(err)
    })
  }

	$scope.salvar = function() {
    if ($scope.formulario.$valid) {

      cadastroDeFotos.cadastrar($scope.foto)
      .then(function(dados) {
        $scope.mensagem = dados.mensagem
        if (dados.inclusao) $scope.foto = {}
      })
      .catch(function(erro) {
        $scope.mensagem = erro.mensagem
      })

    }
  }

})
