<?php

header('content-type:text/html;charset="utf-8"');
//时间赋默认值
$time1 = $_POST['time1'];
$time2 = $_POST['time2'];

if($time1==""){
    $time1 = "1111-01-01";
}
if($time2==""){
    $time2 = "9999-12-31";
}

$connection = mysqli_connect("localhost",'root',"123456","warehouseManage");

//定义sql语句

$sql0 = "SELECT goodsType FROM goods WHERE (date BETWEEN'{$time1}' AND '{$time2}')";


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
