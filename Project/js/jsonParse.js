/**
 * Created by vrezh on 6/21/17.
 */

function jsonParse(file) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            myObj = JSON.parse(this.responseText);
            var text = "";

            for (var i = 0; i < myObj.camera.length; ++i) {
                createSearchByCameraMenu(myObj.camera[i].cameraName);
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

            document.getElementById("detected-objects").innerHTML = text;

        };

        xmlhttp.open("GET", file, true);
        xmlhttp.send();

}

var createSearchByCameraMenu = function (cameraName) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var aText = document.createTextNode(cameraName);
        a.appendChild(aText);
        li.appendChild(a);
        li.onclick = function () {

        }
        var ul = document.getElementById("searchByCamera");
        ul.appendChild(li);
}



$(document).ready(function() {
   jsonParse("../json/detectedObject.json") ;

});

