var text = "";
var i;
for (i = 0; i < 3; i++) {
text += ' \
    <div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 camera-info">\
        <div class="cam-foto">\
        </div>\
        <div class="info" >\
            <p class="info-field" style="margin: 2% 0  0 ;"><b>Camera ' + (i + 1) + '</b></p>\
            <p class="info-field">Location</p>\
            <p class="info-field">Online/Offline</p>\
        </div>\
        <!--<div class="icons">\
            <button class="btn glyphicon glyphicon-edit col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"\ title="Edit">\
            </button>\
            <button class="btn glyphicon glyphicon-remove-circle col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1\ col-sm-offset-1" title="Delete"> </button>\
        </div>-->\
    </div>';
        }
document.getElementById("cam-area").innerHTML = text;
