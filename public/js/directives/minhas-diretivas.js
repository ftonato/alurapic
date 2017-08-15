angular.module('minhasDiretivas', []).directive('meuPainel', function(){

	let ddo = {} // Directive Definition Object
	ddo.restrict = 'AE' // atributo ou elemento

	ddo.scope = {
		titulo: '@'
	}

	ddo.transclude = true


	ddo.templateUrl = 'js/directives/meu-painel.html'

	// Runs during compile
	return ddo
})
.directive('minhaFoto', function() {

  let ddo = {}

  ddo.restrict = 'AE'

  ddo.scope = {
    titulo: '@',
    url: '@'
  }

  ddo.template = '<img class="img-responsive center-block" src="{{ url }}" alt="{{ titulo }}">'

  return ddo
})
.directive('meuBotaoPerigo', function() {

  let ddo = {}

  ddo.restrict = 'E'
  ddo.scope = {
    nome: '@',
    acao : '&'
  }
  ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>'

  return ddo
})
.directive('meuFocus', function() {

  let ddo = {}

  ddo.restrict = 'A'
  ddo.scope = {
    focado : '='
  }

  ddo.link = function(scope, element) {
    scope.$on('fotoCadastrada', function() {
      element[0].focus()
    })
  }

  return ddo
})
