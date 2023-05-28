var usernameInput = document.getElementById("username");
usernameInput.onblur = function () {
    var userName = usernameInput.value.trim();
    if(userName.length>=6&&userName.length<=12){
        document.getElementById("username_err").style.display='none';
    }
    else{
        document.getElementById("username_err").style.display='';
    }
};
var userPasswordInput = document.getElementById("password");
userPasswordInput.onblur = function () {
    var userPassword = userPasswordInput.value.trim();
    if(userPassword.length>=6&&userPassword.length<=12){
        document.getElementById("password_err").style.display='none';
    }
    else{
        document.getElementById("password_err").style.display='';
    }
};
var registerButton = document.getElementById("Register");
registerButton.onclick = function (){
   window.location.replace("Register.html");
}

var submit = document.getElementById("Login");
submit.onclick = function () {
    $.ajax({
        method: "post",
        url: "PHP/Login.php",
        data: {
            username: usernameInput.value,
            password: userPasswordInput.value
        },
        success: function (result) {
            var r = JSON.parse(result);
            if (r.code == 1) {
                window.location.replace("Homepage.html")
                var wrong = document.getElementById("wrong");
                wrong.style.display='none';
            } else {
                var wrong = document.getElementById("wrong");
                wrong.style.display='';
            }
        },
        error: function (msg) {
            console.log("Error")
        }
    });
}
