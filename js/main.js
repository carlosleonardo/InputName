require.config({
    paths: {
        "angular": "../bower_components/angular/angular",
        "jquery": "../bower_components/jquery/dist/jquery"
    },
    shim: {
        "angular": {
            exports: "angular"
        }
    }
});
require(["angular", "index"], function (angular) {
    angular.bootstrap(document, ["mainModule"]);
});
