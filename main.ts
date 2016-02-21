/// <reference path="./typings/requirejs/require.d.ts"/>

// Configuração de libs não-AMD(Asyncronous Module Loading). Nada a ver com aquela empresa ;).
require.config({
    paths: {
        "angular": "../bower_components/angular/angular",
        "jquery" : "../bower_components/jquery/dist/jquery" // Não exports jquery abaixo, em shims, dá conflito com requirejs
    },
    shim: {
        "angular": {
           exports: "angular"
       }
   }
});

// Requirejs usa nomes de arquivo, angular, nomes de módulo
require(["angular", "index"], (angular:ng.IAngularStatic)=> {
    angular.bootstrap(document, ["mainModule"]);
});
