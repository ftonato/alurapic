angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

	$scope.fotos = []
	$scope.filtro = ''

  recursoFoto.query( function(fotos){
    $scope.fotos = fotos;
  }, function(err) {
    console.warn(err)
  })

  $scope.deletar = function(foto) {

    recursoFoto.delete({fotoId : foto._id}, function(fotos){
      var indexFoto = $scope.fotos.indexOf(foto)
      $scope.fotos.splice(indexFoto, 1)

      $scope.mensagem = 'Foto deletada com sucesso!'

    }, function(err) {
      $scope.mensagem = 'Não foi possível deletar a foto'
      console.warn(err)

    })
  }
})
