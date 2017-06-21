function resizeIframe(obj) {
    obj.style.height = (screen.height - 150)+ 'px';
}

$(document).ready(function(){
    if (getCookie('a@mail.ru')) {
        document.getElementById('log').innerHTML =
            "<i class='icon glyphicon glyphicon-user'></i>" + "&nbsp;&nbsp;Admin"
            + "<i class='icon glyphicon glyphicon-arrow'></i>";
        document.getElementById('login').id = "logout";
    }
    $('#nav-menu').click(function(){
        $('#nav').toggle(500);
    });
    $('#home').click(function(){
        ChangeContent('home')
    });
    $('#cameras').click(function(){
        ChangeContent('cameras')
    });
    $('#detected').click(function(){
        ChangeContent('detected')
    });
    $('#login').click(function(){
        ChangeContent('login')
    });
    $('#mobile_home').click(function(){
        ChangeContent('home')
    });
    $('#mobile_cameras').click(function(){
        ChangeContent('cameras')
    });
    $('#mobile_detected').click(function(){
        ChangeContent('detected')
    });
    $('#mobile_login').click(function(){
        ChangeContent('login')
    });
});



function ChangeContent(pageName) {
    switch (pageName) {
        case "home":
            document.getElementById("content").src = "resurces/home.html";
            break;
        case "cameras":
            document.getElementById("content").src = "resurces/cameras.html";
            break;
        case "detected":
            document.getElementById("content").src = "resurces/detected_objects.html";
            break;
        case "login":
            document.getElementById("content").src = "resurces/login.html";
            break;
    }
}

function getCookie(mail) {
    var name = mail + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

