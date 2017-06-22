var data = '{"camName":["Camera_1","Camera_2","Camera_3","Camera_4"], \
            "location":["Location_1","Location_2","Location_3","Location_4"], \
            "onOff":["Online","Online","Offline","Online"]}';
var searchBy = ""
$(document).ready(function(){
    var text = "";
    var i;
    data = JSON.parse(data);
    for (i = 0; i < data.camName.length; i++) {
    text += ' \
        <div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 camera-info">\
            <div class="cam-foto">\
            </div>\
            <div class="info" >\
                <p class="info-field" style="margin: 2% 0  0 ;"><b> ' + data.camName[i] + '</b></p>\
                <p class="info-field">' + data.location[i] + '</p>\
                <p class="info-field">' + data.onOff[i] + '</p>\
            </div>\
            <!--<div class="icons">\
                <button class="btn glyphicon glyphicon-edit col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"\ title="Edit">\
                </button>\
                <button class="btn glyphicon glyphicon-remove-circle col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1\ col-sm-offset-1" title="Delete"> </button>\
            </div>-->\
        </div>';
    }
    document.getElementById("cam-area").innerHTML += text;
});


var search = function() {
    document.getElementById("notFound").style.display = "none";
    var cam = document.getElementById("search_area").value;
    var find = false;
    if (searchBy === "name") {
        for (i = 0; i < data.camName.length; i++) {
                if (cam === data.camName[i]) {
                    find = true;
                    var text = ' \
                        <div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 camera-info">\
                            <div class="cam-foto">\
                            </div>\
                            <div class="info" >\
                                <p class="info-field" style="margin: 2% 0  0 ;"><b> ' + data.camName[i] + '</b></p>\
                                <p class="info-field">' + data.location[i] + '</p>\
                                <p class="info-field">' + data.onOff[i] + '</p>\
                            </div>\
                            <!--<div class="icons">\
                                <button class="btn glyphicon glyphicon-edit col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"\ title="Edit">\
                                </button>\
                                <button class="btn glyphicon glyphicon-remove-circle col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1\ col-sm-offset-1" title="Delete"> </button>\
                            </div>-->\
                        </div>';
                        document.getElementById("cam-area").innerHTML = text;
                        break;
                }
        }
    } else if (searchBy === "loc") {
        for (i = 0; i < data.camName.length; i++) {
                if (cam === data.location[i]) {
                    document.getElementById("cam-area").innerHTML = ""
                    find = true;
                    var text = ' \
                        <div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 camera-info">\
                            <div class="cam-foto">\
                            </div>\
                            <div class="info" >\
                                <p class="info-field" style="margin: 2% 0  0 ;"><b> ' + data.camName[i] + '</b></p>\
                                <p class="info-field">' + data.location[i] + '</p>\
                                <p class="info-field">' + data.onOff[i] + '</p>\
                            </div>\
                            <!--<div class="icons">\
                                <button class="btn glyphicon glyphicon-edit col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"\ title="Edit">\
                                </button>\
                                <button class="btn glyphicon glyphicon-remove-circle col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1\ col-sm-offset-1" title="Delete"> </button>\
                            </div>-->\
                        </div>';
                        document.getElementById("cam-area").innerHTML += text;
                }
        }
    } else {
        document.getElementById("notFound").innerHTML = "<p>Please select action</p>";
        document.getElementById("notFound").style.display = "block";
        return;
    }
    if (!find) {
        document.getElementById("notFound").innerHTML = "Not found";
        document.getElementById("notFound").style.display = "block";
    }
    document.getElementById("search_area").value = "";
}

/*For search dropdown*/

$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#","");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});

var choose = function(check) {
    searchBy = check;
}