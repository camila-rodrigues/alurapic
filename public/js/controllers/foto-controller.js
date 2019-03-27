angular.module("alurapic").controller("FotoController", function($scope, $routeParams, recursoFoto, cadastroDeFoto) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
        
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
            $scope.foto = foto;
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = "Não foi possível localizar a foto"
        });
    }

    $scope.submeter = function() {
        
        if ($scope.formulario.$valid) {

            cadastroDeFoto.cadastrar($scope.foto)
            .then(function(dados)
            {
                $scope.mensagem = dados.mensagem;

                if (dados.inclusao)
                {
                    $scope.foto = {};
                    
                    // $setPristine() method is used to remove the ng-dirty class and set the control to its pristine state (ng-pristine class) (the old/last state)
                    $scope.formulario.$setPristine();
                }
            })
            .catch(function(erro)
            {
                $scope.mensagem = erro.mensagem;
            });
        }
    }
});