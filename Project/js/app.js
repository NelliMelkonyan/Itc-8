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

app.controller('head',function ($scope) {
    $scope.showMe = false;
    $scope.myFoo = function() {
        $scope.showMe = !$scope.showMe;
        alert($scope.showMe);
    }
});

var checkEmail = false,
    checkPsw = false;

function validate() {
    if (true == checkEmail && true == checkPsw) {
        document.getElementById("btnLogId").disabled = false;
    }
}

function setMyAtributtsForEmail() {
    document.getElementById("alertEmail").style.display = "block";
    document.getElementById("inputEmail").style.borderColor = "red";
    //document.getElementById("inputEmail").style.boxShadow = "1px 1px 1px 1px red";
    document.getElementById("btnLogId").disabled = true;
}
function setMyAtributtsForPassword() {
    document.getElementById("alertPsw").style.display = "block";
    document.getElementById("inputPassword").style.borderColor = "red";
    //document.getElementById("inputPassword").style.boxShadow = "1px 1px 1px 1px red";
    document.getElementById("btnLogId").disabled = true;
}

app.controller('login', function($scope) {
    $scope.email = '';
    $scope.validateEmail = function() {
        var regularExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ("" == $scope.email) {
            document.getElementById("alertEmail").innerHTML = "Please, fill out this field";
            setMyAtributtsForEmail();
            checkEmail = false;
        } else if (!regularExpression.test($scope.email)) {
            document.getElementById("alertEmail").innerHTML = "Invalid mail format";
            setMyAtributtsForEmail();
            checkEmail = false;
        } else {
            document.getElementById("alertEmail").style.display = "none";
            document.getElementById("inputEmail").style.borderColor = "green";
            //document.getElementById("inputEmail").style.boxShadow = "1px 1px 1px 1px green";
            checkEmail = true;
            validate();
        }
    };
    $scope.validatePassword = function() {
        var regularExpression = /^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,20}$/;
        if ("" == $scope.password) {
            document.getElementById("alertPsw").innerHTML = "Please, fill out this field";
            setMyAtributtsForPassword();
            checkPsw = false;
        } else if (!regularExpression.test($scope.password)) {
            document.getElementById("alertPsw").innerHTML = "Password should contain 6-20 symbols <br> (required one lowercase letter and one number)";
            setMyAtributtsForPassword();
            checkPsw = false;
        } else {
            document.getElementById("alertPsw").style.display = "none";
            document.getElementById("inputPassword").style.borderColor = "green";
            //document.getElementById("inputPassword").style.boxShadow = "1px 1px 1px 1px green";
            checkPsw = true;
            validate();
        }
    };
});