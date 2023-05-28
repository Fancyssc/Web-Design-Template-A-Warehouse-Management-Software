var time1Input = document.getElementById("time1");
var time2Input = document.getElementById("time2");
var typeInput= document.getElementById("type");
var locationInput = document.getElementById("location");

var submit = document.getElementById("Back");
submit.onclick = function (){
    window.location.replace("Statistics.html")
}
check();
function check(){
    $.ajax({
        method: "post",
        url: "PHP/Statistics2.php",
        data: {
        },
        success: function (result) {
            var r= JSON.parse(result);
            var length = r.length;
            var total = document.getElementById("total");
            total.innerHTML = "Records in total: "+length;
                for(var i=10;i<length;i++){
                    var p = i+1;
                    var goods = document.getElementById(p+"_1");
                    var type = document.getElementById(p+"_2");
                    var warehouse = document.getElementById(p+"_3");
                    var location = document.getElementById(p+"_4");
                    var date = document.getElementById(p+"_5");
                    goods.innerHTML = "fuck";
                    goods.innerHTML = r[i]['goodsID'];
                    type.innerHTML = r[i]['goodsType'];
                    warehouse.innerHTML = r[i]['wareID'];
                    location.innerHTML= r[i]['locationInWareHouse'];
                    date.innerHTML=r[i]['date'];
                }
        },
        error: function (msg) {
            console.log("Error")
        }
    })
}