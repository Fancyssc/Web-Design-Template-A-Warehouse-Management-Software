var time1Input = document.getElementById("time1");
var time2Input = document.getElementById("time2");

var submit = document.getElementById("Check");

submit.onclick = function (){
    //表1
    $.ajax({
        method: "post",
        url: "PHP/DataAna.php",
        data: {
            time1:time1Input.value,
            time2:time2Input.value
        },
        success: function (result) {
            var r= JSON.parse(result);
            var length = r.length;
            console.log(r.length)
            // 表1 比例和数量
            var studycount = 0;
            var carcount = 0;
            var electroniccount = 0;
            var dailycount = 0;
            var foodcount = 0;
            var clothescount = 0;

            for(var j=0;j<length;j++){
                if(r[j]['goodsType']=="Study"){
                    studycount++;
                }
                if(r[j]['goodsType']=="Car"){
                    carcount++;
                }
                if(r[j]['goodsType']=="Electronic"){
                    electroniccount++;
                }
                if(r[j]['goodsType']=="Daily"){
                    dailycount++;
                }
                if(r[j]['goodsType']=="Food"){
                    foodcount++;
                }
                if(r[j]['goodsType']=="Clothes"){
                   clothescount++;
                }
            }
            var echart1= echarts.init(document.getElementById("container1"));
            var option = {
                title: {
                    text: "Goods Type Percentage",
                    left:"left",
                    top:"10%",
                    fontSize:20
                },
                tooltip: {},
                series: [{
                    type: "pie",
                    name: "Count",
                    radius: ["25%", "55%"],//半径
                    data: [{
                        value: studycount,
                        name: "Study",
                        label:{
                            show:true,
                            position:"center",
                            formatter:"{big|{d}}{small|%}\n{b}",//a 系列名称，c 数据值, d百分比
                            rich:{
                                big:{fontSize:"24px",fontWeight:900},
                                small:{fontSize:"12px",color:"#00aaff"},
                            }
                        }
                    },
                        {
                            value: carcount,
                            name: "Car",
                            label:{show:true}
                        },
                        {
                            value: electroniccount,
                            name: "Electronic",
                            label:{show:true}
                        },
                        {
                            value: dailycount,
                            name: "Daily",
                            label:{show:true}
                        },
                        {
                            value: foodcount,
                            name: "Food",
                            label:{show:true}
                        },
                        {
                            value: clothescount,
                            name: "Clothes",
                            label:{show:true}
                        }
                    ]
                }]
            }
            echart1.setOption(option);
        },
        error: function (msg) {
            console.log("Error")
        }
    })

    // 表2
    $.ajax({
        method: "post",
        url: "PHP/DataAna2.php",
        data: {
            time1: time1Input.value,
            time2:time2Input.value
        },
        success: function (result) {
            var r2 = JSON.parse(result);
            var ware1=0;
            var ware2=0;
            var ware3=0;
            var ware4=0;
            for(var k =0;k<r2.length;k++){
                if(r2[k]['wareID']=="1"){
                    ware1 = r2[k]['count'];
                }
                if(r2[k]['wareID']=="2"){
                    ware2 = r2[k]['count'];
                }
                if(r2[k]['wareID']=="3"){
                    ware3 = r2[k]['count'];
                }
                if(r2[k]['wareID']=="4"){
                    ware4 = r2[k]['count'];
                }
            }
            var echart2 = echarts.init(document.getElementById("container2"));
            var option = {
                title: {
                    left:"left",
                    text: "Difference In Each Warehouse"
                },
                tooltip: {},
                xAxis: {
                    data: ["house1", "house2", "house3", "house4"]
                },
                yAxis: {},
                series: [{
                    type: "bar",
                    data: [ware1,ware2,ware3,ware4],
                    name: 'difference',
                    itemStyle: {
                        normal: {
                            //这里是重点
                            color: function(params) {
                                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                var colorList = ['#ee6666','#3ba272', '#7ed3f4', '#fac858', '#91c7ae','#749f83', '#ca8622'];
                                return colorList[params.dataIndex]
                            }
                        }
                    }

                }]
            }
            echart2.setOption(option);
        },
        error: function (msg) {
            console.log("Error")
        }
    })
    $.ajax({
        method: "post",
        url: "PHP/DataAna3.php",
        data: {
        },
        success: function (result) {
            var r3 = JSON.parse(result);
            var eChart3 = echarts.init(document.getElementById("container3"));
            var option = {
                title: {
                    left:"left",
                    text: "Difference By Time"
                },
                xAxis: { type: 'category',   // 还有其他的type，可以去官网喵两眼哦
                    data: ['2021.12.13', '2022-06-30', '2022-07-03', '2022-07-07', '2022-07-22'],   // x轴数据
                    name: 'Date',   // x轴名称
                    nameTextStyle: {
                        fontSize: 18
                    }
                },
                yAxis: {
                    type: 'value',
                    name: 'Difference',   // y轴名称
                    // y轴名称样式
                    nameTextStyle: {
                        fontWeight: 600,
                        fontSize: 18
                    }
                },
                label: {
                },
                tooltip: {trigger: 'axis'},
                series: [
                    {
                        name: 'location1',
                        data: [r3[0]['count'], r3[4]['count'],r3[8]['count'], r3[12]['count'], r3[16]['count']],
                        type: 'line'
                    },
                    {
                        name: 'location2',
                        data: [r3[1]['count'], r3[5]['count'], r3[9]['count'], r3[13]['count'], r3[17]['count']],
                        type: 'line'
                    },
                    {
                        name: 'location3',
                        data: [r3[2]['count'],r3[6]['count'], r3[10]['count'], r3[14]['count'], r3[18]['count']],
                        type: 'line'
                    },
                    {
                        name: 'location4',
                        data: [r3[3]['count'], r3[7]['count'], r3[11]['count'],r3[15]['count'], r3[19]['count']],
                        type: 'line'
                    }
                    ]
            }
                eChart3.setOption(option);
        },
        error: function (msg) {
            console.log("Error")
        }
    })
}