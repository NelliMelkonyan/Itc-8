var app = angular.module("my-app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "resources/home.html"
        })
        .when("/objects", {
            templateUrl : "resources/detected_objects.html"
        })
        .when("/cameras", {
            templateUrl : "resources/cameras.html"
        })
        .when("/login", {
            templateUrl : "resources/login.html"
        });
});