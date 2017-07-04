var app = angular.module("my-app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "resources/home.html",
            controller : "myCtrl"
        })
        .when("/objects", {
            templateUrl : "resources/detected_objects.html",
            controller : "objects"
        })
        .when("/cameras", {
            templateUrl : "resources/cameras.html",
            controller : "cameras"
        })
        .when("/login", {
            templateUrl : "resources/login.html",
            controller : "login"
        });
});

app.controller('myCtrl', function($scope) {
    $scope.name = "jkshdfksd";

});

app.controller('objects', function($scope) {
    $scope.name = "hello";
});

app.controller('cameras', function($scope) {
    alert("cameras");
});

app.controller('login', function($scope) {
    alert("login");
});
