var detected = angular.module("detectedObjectsModule", []);

detected.controller("detectedObjectsController", function($scope) {
    $scope.ocw = {
        "cameras": [
            { "cameraName": "Camera 1",
                "images":
                    [
                        {
                            "imageName": "../images/ficsed.JPG",
                            "imageDate": "01/15/2015"
                        },
                        {
                            "imageName": "../images/ficsed.JPG",
                            "imageDate": "01/15/2016"
                        }
                    ]
            },
            { "cameraName": "Camera 2",
                "images":
                    [
                        {
                            "imageName": "../images/ficsed.JPG",
                            "imageDate": "01/15/2016"
                        },
                        {
                            "imageName": "../images/ficsed.JPG",
                            "imageDate": "01/15/2018"
                        }
                    ]
            }
        ]
    };

});