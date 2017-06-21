$(document).ready(function(){
    $('#btnLogId').click(function(){
        var mail = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        alert( window.parent.document.getElementById('login'));
        var exdays = 5;
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = mail + "=" + pass + ";" + expires + ";path=/";
        alert(mail + " " + pass + " " + exdays);
    });
});


