$(document).ready(function(){
    $('#btnLogId').click(function(){
        var mail = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        window.parent.document.getElementById('log').innerHTML = "<i class='icon glyphicon glyphicon-user'></i>" + "&nbsp;&nbsp;Admin" + "<i class='icon glyphicon glyphicon-arrow'></i>";
        window.parent.document.getElementById('content').src = "resurces/home.html";
        alert("Welcome");
        location.reload(false);
        var exhours = 5;
        var d = new Date();
        d.setTime(d.getTime() + (exhours*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = mail + "=" + pass + ";" + expires + ";path=/";
    });
});


