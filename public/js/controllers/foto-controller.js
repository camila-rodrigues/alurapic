angular.module("alurapic").controller("FotoController", function($scope, $routeParams, recursoFoto) {
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
            
            if ($routeParams.fotoId) {

                recursoFoto.update({fotoId: $routeParams.fotoId}, $scope.foto, function() {
                    $scope.mensagem = "Foto " + $scope.foto.titulo + " atualizada com sucesso";
                }, function() {
                    $scope.mensagem = "Não foi possível atualizar a foto";
                    console.log(erro);
                });

                return;
            }

            recursoFoto.save($scope.foto, function() {
                $scope.foto = {};
                $scope.mensagem = "Foto inserida com sucesso";

                // $setPristine() method is used to remove the ng-dirty class and set the control to its pristine state (ng-pristine class) (the old/last state)
                $scope.formulario.$setPristine();
            }, function(erro) {
                $scope.mensagem = "Foto não foi inserida devido a algum erro";
                console.log(erro);
            });
        }
    }
});