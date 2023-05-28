var nameInput = document.getElementById("name");
var userPasswordInput = document.getElementById("password");
var wareIdInput = document.getElementById("wareId");
userPasswordInput.onblur = function () {
    var userPassword = userPasswordInput.value.trim();
    if(userPassword.length>=6&&userPassword.length<=12){
        document.getElementById("password_err").style.display='none';
    }
    else{
        document.getElementById("password_err").style.display='';
    }
};
var submit = document.getElementById("Confirm");
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
        url: "PHP/PersonalInfo.php",
        data: {
            password:userPasswordInput.value,
            workername:nameInput.value,
            wareId: wareIdInput.value,
            gender:GetGenderValue("gender")
        },
        success: function (result) {
                alert("Modified successfully!");
                window.location.replace("Homepage.html")
        },
        error: function (msg) {
            console.log("Error")
        }
    })
}