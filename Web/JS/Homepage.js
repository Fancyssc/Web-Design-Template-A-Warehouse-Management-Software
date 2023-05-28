//邮箱网页链接
var contact = document.getElementsByClassName("contactus")
contact[0].onclick = function (){
    open("http://www.outlook.com");
}
contact[1].onclick = function (){
    open("http://www.outlook.com");
}

//个人信息页面链接
var personalInfo = document.getElementById("personal");
personalInfo.onclick = function (){
    window.location.replace("PersonalInfo.html");
}
//统计查询页面
var statistics = document.getElementById("statistics");
statistics.onclick = function (){
    window.location.replace("Statistics.html");
}

//数据分析可视化页面
var dataAnalysis= document.getElementById("analysis");
dataAnalysis.onclick = function (){
    window.location.replace("DataAna.html");
}
infoDis()
function infoDis (){
    $.ajax({
        method: "",
        url: "PHP/Homepage.php",
        data: {
            username: 1
        },
        success: function (result) {
            r = JSON.parse(result);
            var name = document.getElementById("nameDis");
            var username = document.getElementById("usernameDis");
            var wareId = document.getElementById("wareIdDis");
            var gender = document.getElementById("genderDis");
            name.innerHTML = r['name']+',';
            username.innerHTML = r['username'];
            wareId.innerHTML = r['wareId'];
            gender.innerHTML = r['gender'];
        },
        error: function (msg) {
            console.log("Error")
        }
    })
}

