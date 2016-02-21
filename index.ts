import angular = require("angular");
import $ = require("jquery");

class Aplicacao
{
    modulo:angular.IModule;
    public init(): void {
        this.modulo.controller("indexController",['$scope', ($scope)=>{
            $scope.obterMensagem = ()=>{
                if ($scope.nome == undefined) {
                    alert("Informe seu nome");
                    return;
                }
                $scope.mensagem = "Olá, " + $scope.nome + "!";
            };
        }])
    }

    public constructor()
    {
        this.modulo = angular.module("mainModule", []);
    }
}

//$(()=>{
    var app = new Aplicacao()
    app.init();
//})
