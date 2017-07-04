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

app.controller('cameras', function($scope) {
    $scope.data = [
        {
            camName: "Camera_1",
            location: "Location_1",
            onOff: "Online"
        },
        {
            camName: "Camera_2",
            location: "Location_2",
            onOff: "Online"
        },
        {
            camName: "Camera_3",
            location: "Location_3",
            onOff: "Offline"
        },
        {
            camName: "Camera_4",
            location: "Location_4",
            onOff: "Online"
        },

    ]
});

app.controller('login', function($scope) {
    alert("login");
});
