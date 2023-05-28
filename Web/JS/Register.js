var usernameInput = document.getElementById("username");
var userPasswordInput = document.getElementById("password");
var wareIdInput = document.getElementById("wareId");
var nameInput = document.getElementById("name");
usernameInput.onblur = function () {
    var userName = usernameInput.value.trim();
    if(userName.length>=6&&userName.length<=12){
        document.getElementById("username_err").style.display='none';
    }
    else{
        document.getElementById("username_err").style.display='';
    }
};
userPasswordInput.onblur = function () {
    var userPassword = userPasswordInput.value.trim();
    if(userPassword.length>=6&&userPassword.length<=12){
        document.getElementById("password_err").style.display='none';
    }
    else{
        document.getElementById("password_err").style.display='';
    }
};
var submit = document.getElementById("Register");
function GetGenderValue(radio){
    var obj;
    obj=document.getElementsByName(radio);
    if(obj!=null){
        var i;
        for(i=0;i<2;i++){
            if(obj[i].checked){
                return obj[i].value;
            }
        }
    }
    return null;
}
submit.onclick = function (){
    $.ajax({
        method: "post",
        url: "PHP/Register.php",
        data: {
            username: usernameInput.value,
            password:userPasswordInput.value,
            workername:nameInput.value,
            wareId: wareIdInput.value,
            gender:GetGenderValue("gender")
        },
        success: function (result) {
            var r= JSON.parse(result);
            if (r == 2) {
                alert("Register successfully!");
                window.location.replace("Login.html")
            }
            else if(r==1) {
            }
            else{
                alert("The username has been used");
            }
        },
        error: function (msg) {
            console.log("Error")
        }
    })
}