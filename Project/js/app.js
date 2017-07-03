var app = angular.module("my-app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "resurces/home.html"
        })
        .when("/objects", {
            templateUrl : "resurces/detected_objects.html"
        })
        .when("/cameras", {
            templateUrl : "resurces/cameras.html"
        })
        .when("/login", {
            templateUrl : "resurces/login.html"
        });
});
