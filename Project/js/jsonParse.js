/**
 * Created by vrezh on 6/21/17.
 */

var jsonText = '  { "camera": [\
    { "cameraName": "Camera 1",\
      "images": [\
        {\
          "imageName": "../images/ficsed.JPG",\
          "imageDate": "09 Sep 2005 13:51:39"\
        },\
        {\
          "imageName": "../images/ficsed.JPG",\
          "imageDate": "09 Sep 2005 13:51:39"\
        }\
      ]\
    },\
    {\
      "cameraName": "Camera 2",\
      "images": [\
        {\
          "imageName": "../images/ficsed.JPG",\
          "imageDate": "09 Sep 2005 13:51:39"\
        },\
        {\
          "imageName": "../images/ficsed.JPG",\
          "imageDate": "09 Sep 2005 13:51:39"\
        }\
      ]\
    }\
  ]\
}'

//var cameraName = [];

/*function jsonParse(file, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                myObj = JSON.parse(this.responseText)
                callback(myObj);
            }
        };
        xmlhttp.open("GET", file, true);
        xmlhttp.send();
}*/

$(document).ready(function() {
	var myObj = JSON.parse(jsonText) 
   	//jsonParse("../json/detectedObject.json",createItem) ;
	createItem(myObj);
});

/*var createSearchByCameraMenu = function () {
    var a = document.getElementById("searchByCamera");

    for (var i = 0; i < cameraName.length; ++i) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var aText = document.createTextNode(cameraName[i]);
        a.appendChild(aText);
        li.appendChild(a);
        li.onclick = function () {
            var name = cameraName[i];
            cameraName[i] = cameraName[0];
            cameraName[0] = name;
        }
        var ul = document.getElementById("searchByCamera");
        ul.appendChild(li);
    }
}*/

var createItem = function(myObj, cameraName) {
    var text = "";
    /*for (var i = 0; i < myObj.camera.length; ++i) {
        cameraName[i] = myObj.camera[i].cameraName;
    }*/

    for (var i = 0; i < myObj.camera.length; ++i) {
        //createSearchByCameraMenu(myObj.camera[i].cameraName);
        if(myObj.camera[i].cameraName == cameraName || !cameraName) {
            for (var j = 0; j < myObj.camera[i].images.length; ++j) {
                text += '\
                    <div class="detected-object row">\
                        <img class="col-md-3 col-xs-3 col-sm-3" src="' + myObj.camera[i].images[j].imageName + '">\
                        <div class="col-xs-9 col-sm-9 col-md-9 ficsed-data">\
                                        <p><b>' + myObj.camera[i].cameraName + '</b></p>\
                            <p>' + myObj.camera[i].images[j].imageDate + '</b></p>\
                        </div>\
                        <!--<div class="col-md-3 col-xs-3 col-sm-3">\
                            <button class="btn glyphicon glyphicon-edit col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"> </button>\
                            <button class="btn glyphicon glyphicon-remove-circle col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"> </button>\
                            <button type="button" class="btn glyphicon glyphicon-paperclip col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"> </button>\
                        </div>-->\
                    </div>';
            }
        }
    }
    document.getElementById("detected-objects").innerHTML = text;
}

var searchByCameraName = function() {
    var text = document.getElementById("searchByCamera").value;
    var myObj = JSON.parse(jsonText)
    createItem(myObj, text);
}