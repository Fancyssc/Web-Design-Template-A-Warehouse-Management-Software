var time1Input = document.getElementById("time1");
var time2Input = document.getElementById("time2");
var typeInput= document.getElementById("type");
var locationInput = document.getElementById("location");

var submit = document.getElementById("Check");

function GetOrderValue(radio){
    var obj;
    obj=document.getElementsByName(radio);
    if(obj!=null){
        var i;
        for(i=0;i<3;i++){
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
        url: "PHP/Statistics.php",
        data: {
             time1:time1Input.value,
             time2:time2Input.value,
             type:typeInput.value,
             location:locationInput.value,
             order:GetOrderValue("order")
        },
        success: function (result) {
            var r= JSON.parse(result);
            var length = r.length;
            var total = document.getElementById("total");
            console.log(r);
            total.innerHTML = "Records in total: "+length;
                for(var i=0;i<length;i++){
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
