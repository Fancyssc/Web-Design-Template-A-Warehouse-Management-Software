<?php

header('content-type:text/html;charset="utf-8"');

$time1 = $_POST['time1'];
$time2 = $_POST['time2'];
$type = $_POST['type'];
$location = $_POST['location'];
$order = $_POST['order'];


//时间赋默认值
if($time1==""){
    $time1 = "1111-01-01";
}
if($time2==""){
    $time2 = "9999-12-31";
}

$statistics_save = fopen('../txt/Statistics.txt','w');
fwrite($statistics_save,"$time1\n");
fwrite($statistics_save,"$time2\n");
if($type!=""){
fwrite($statistics_save,"$type\n");}
if($location!=""){
fwrite($statistics_save,"$location\n");}
fclose($statistics_save);

if($order!="") {
    $order_save = fopen('../txt/Order.txt', 'w');
    fwrite($order_save, "$order\n");
    fclose($order_save);
}
else{
    $order_save = fopen('../txt/Order.txt', 'w');
    fwrite($order_save, "null");
    fclose($order_save);
}

$connection = mysqli_connect("localhost",'root',"123456","warehouseManage");

//定义sql语句

if($order=="") {
    if ($type == "" && $location == "") {
        $sql0 = "SELECT * FROM goods where (date BETWEEN'{$time1}' AND '{$time2}');";
    }
    if ($type != "" && $location == "") {
        $sql0 = "SELECT * FROM goods where (date BETWEEN'{$time1}' AND '{$time2}') AND goodsType = '{$type}';";
    }
    if ($type == "" && $location != "") {
        $sql0 = "SELECT * FROM goods where (date BETWEEN'{$time1}' AND '{$time2}') AND locationInWarehouse = '{$location}';";
    }
    if ($type != "" && $location != "") {
        $sql0 = "SELECT * FROM goods where (date BETWEEN'{$time1}' AND '{$time2}') AND locationInWarehouse = '{$location}'AND goodsType ='{$type}';";
    }
}
else{
    if ($type == "" && $location == "") {
        $sql0 = "SELECT * FROM goods where (date BETWEEN'{$time1}' AND '{$time2}') ORDER BY $order;";
    }
    if ($type != "" && $location == "") {
        $sql0 = "SELECT * FROM goods where (date BETWEEN'{$time1}' AND '{$time2}') AND goodsType = '{$type}' ORDER BY $order;";
    }
    if ($type == "" && $location != "") {
        $sql0 = "SELECT * FROM goods where (date BETWEEN'{$time1}' AND '{$time2}') AND locationInWarehouse = '{$location}' ORDER BY $order;";
    }
    if ($type != "" && $location != "") {
        $sql0 = "SELECT * FROM goods where (date BETWEEN'{$time1}' AND '{$time2}') AND locationInWarehouse = '{$location}'AND goodsType ='{$type}' ORDER BY $order;";
    }
}
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
