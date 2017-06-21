$(document).ready(function(){
    $('#btnLogId').click(function(){
        alert("Click");
        var mail = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        if (checkEmail(mail)){
            if (checkPassword(pass)) {
                //window.parent.document.getElementById("content").src = "resurces/home.html";
                document.getElementById("content").src = "resurces/home.html";
                /*
                 window.parent.document.getElementById('log').innerHTML = "<i class='icon glyphicon glyphicon-user'></i>" + "&nbsp;&nbsp;Admin" + "<i class='icon glyphicon glyphicon-arrow'></i>";
                 window.parent.document.getElementById('content').src = "resurces/home.html";
                 location.reload(false);
                 var exhours = 5;
                 var d = new Date();
                 d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
                 var expires = "expires=" + d.toUTCString();
                 document.cookie = mail + "=" + pass + ";" + expires + ";path=/";
                 */
            }
        }
    });
});

function checkEmail(email) {
    /*var email = document.getElementById('email');*/
    //var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    alert("email");
    var filter = /^[a-zA-Z]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!filter.test(email)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
    return true;
}

function checkPassword(pass) {
    // at least one number, one lowercase and one uppercase letter
    // at least six characters that are letters, numbers or the underscore
    /*var filter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;*/
    alert("pass");
    var filter = /(?=.*[a-z])(?=.*[A-Z]).{6,15}/;
    if (!filter.test(pass)) {
        alert('Password must contain at least 6 characters, at least one number, one lowercase and one uppercase letter.All characters are allowed');
        pass.focus;
        return false;
    }
    return true;
}

