angular.module("minhasDiretivas", [])
.directive("meuPainel", function() {

    var ddo = {};

    ddo.restrict = "AE";
    ddo.transclude = true;
    ddo.scope = {
        titulo: "@"
    };
    ddo.templateUrl = "js/directives/meu-painel.html";

    return ddo;
}).directive("minhaFoto", function() {
    
    var ddo = {};

    ddo.restrict = "E";
    ddo.scope = {
        url: "@",
        titulo: "@"
    };
    ddo.template = '<img class="img-responsive center-block" ng-src="{{ url }}" alt="{{titulo}}">';

    return ddo;
})
.directive("meuBotaoPerigo", function() {

    var ddo = {};

    ddo.restrict = "E";
    ddo.scope = {
        nome: "@",
        acao: "&"
    };

    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{ nome }}</button>';

    return ddo;
})
.directive("meuFocus", function() {
    var ddo = {};

    ddo.restrict = "A";

    ddo.link = function(scope, element) {

        scope.$on("fotoCadastrada", function() {
            element[0].focus();
        });
    };
    
    return ddo;
});