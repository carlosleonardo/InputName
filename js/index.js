define(["require", "exports", "angular"], function (require, exports, angular) {
    "use strict";
    var Aplicacao = (function () {
        function Aplicacao() {
            this.modulo = angular.module("mainModule", []);
        }
        Aplicacao.prototype.init = function () {
            this.modulo.controller("indexController", ['$scope', function ($scope) {
                    $scope.obterMensagem = function () {
                        if ($scope.nome == undefined) {
                            alert("Informe seu nome");
                            return;
                        }
                        $scope.mensagem = "Olá, " + $scope.nome + "!";
                    };
                }]);
        };
        return Aplicacao;
    }());
    var app = new Aplicacao();
    app.init();
});
