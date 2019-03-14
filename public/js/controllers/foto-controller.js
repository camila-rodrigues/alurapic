angular.module("alurapic").controller("FotoController", function($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
        $http.get("/v1/fotos/" + $routeParams.fotoId)
        .success(function(foto) {
            $scope.foto = foto;
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = "Não foi possível localizar a foto"
        });
    }

    $scope.submeter = function() {
        
        if ($scope.formulario.$valid) {
            
            if ($routeParams.fotoId) {

                $http.put("/v1/fotos/" + $routeParams.fotoId, $scope.foto)
                .success(function() {
                    $scope.mensagem = "Foto " + $scope.foto.titulo + " atualizada com sucesso";
                })
                .error(function() {
                    $scope.mensagem = "Não foi possível atualizar a foto";
                    console.log(erro);
                });

                return;
            }

            $http.post("/v1/fotos", $scope.foto)
            .success(function() {
                $scope.foto = {};
                $scope.mensagem = "Foto inserida com sucesso";

                // $setPristine() method is used to remove the ng-dirty class and set the control to its pristine state (ng-pristine class) (the old/last state)
                $scope.formulario.$setPristine();
            })
            .error(function(erro) {
                $scope.mensagem = "Foto não foi inserida devido a algum erro";
                console.log(erro);
            });
        }
    }
});