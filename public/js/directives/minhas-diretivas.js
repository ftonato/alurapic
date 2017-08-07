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
});
