<?php

header('content-type:text/html;charset="utf-8"');
//时间赋默认值
$time1 = $_POST['time1'];
$time2 = $_POST['time2'];

if($time1==""){
    $time1 = "2020-01-01";
}
if($time2==""){
    $time2 = "2024-01-01";
}

$connection = mysqli_connect("localhost",'root',"123456","warehouseManage");

//定义sql语句

$sql0 = "SELECT wareID,count(goodsID) as count from goods WHERE date <'{$time2}' AND goodsID NOT IN (SELECT goodsID from goods WHERE date <'{$time1}') GROUP BY wareID";


//针对结果判断
$query = mysqli_query($connection,$sql0);
$result_set = array();

//var_dump($query);
while($row=mysqli_fetch_assoc($query)){
    $result_set[] = $row;
}
if(1){
    echo json_encode($result_set);
}
else{

}
