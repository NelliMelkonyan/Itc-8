/**
 * Created by vrezh on 6/17/17.
 */
var text ='\
    <div class="detected-object row">\
        <img class="col-md-3 col-xs-3 col-sm-3" src="../images/ficsed.JPG">\
        <div class="col-xs-9 col-sm-9 col-md-9 ficsed-data">\
            <p><b>Camera 1</b></p>\
            <p>Fri, 09 Sep 2005 13:51:39</b></p>\
        </div>\
<!--<div class="col-md-3 col-xs-3 col-sm-3">\
    <button class="btn glyphicon glyphicon-edit col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"> </button>\
    <button class="btn glyphicon glyphicon-remove-circle col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"> </button>\
    <button type="button" class="btn glyphicon glyphicon-paperclip col-md-3 col-xs-3 col-sm-3 col-md-offset-1 col-xs-offset-1 col-sm-offset-1"> </button>\
</div>-->\
    </div>' ;

var i = 0;
for(var i = 0; i < 5; i++) {
    document.write(text);

}

