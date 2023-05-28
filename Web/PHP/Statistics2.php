<?php

$time1 = "";
$time2 =  "";
$type =  "";
$location = "";
$order = "";

header('content-type:text/html;charset="utf-8"');

$fread = array();
$statistics_read = fopen("../txt/Statistics.txt",'r');

while(!feof($statistics_read)){
    $row = fgets($statistics_read);
    $fread[] = $row;
}
fclose($statistics_read);

$time1 = $fread[0];
$time2 = $fread[1];
if(sizeof($fread)>2){$type =  $fread[2];}
if(sizeof($fread)>3){$location =  $fread[3];}

$order_read = fopen("../txt/Order.txt",'r');
$order= fgets($order_read);
fclose($order_read);



//时间赋默认值
if ($time1 == "") {
    $time1 = "1111-01-01";
}
if ($time2 == "") {
    $time2 = "9999-12-31";
}

$connection = mysqli_connect("localhost", 'root', "123456", "warehouseManage");

//定义sql语句
if($order=="null"){
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
$query = mysqli_query($connection, $sql0);
$result_set = array();

//var_dump($query);
while ($row = mysqli_fetch_assoc($query)) {
    $result_set[] = $row;
}
if (1) {
    echo json_encode($result_set);
} else {

}
