<?php
header('content-type:text/html;charset="utf-8"');

$username = $_POST['username'];
$password = $_POST['password'];
$workername = $_POST['workername'];
$wareId = $_POST['wareId'];
$gender = $_POST['gender'];


//链接数据库
$connection = mysqli_connect("localhost","root","123456");

$response = "";

//判断连接是否成功
if(!$connection){
    $response = 0;
    exit;
}

mysqli_set_charset($connection,"utf8");
//选择数据库
mysqli_select_db($connection,"warehouseManage");

//定义sql语句
$sql0 = "SELECT * FROM worker where workerID ='{$username}'";
$query0 = mysqli_query($connection,$sql0);
$rst0 = mysqli_fetch_assoc($query0);

$sql1 = "INSERT INTO worker VALUES ('{$username}','${workername}', '{$password}','{$wareId}','${gender}')";
$insert0 = mysqli_query($connection,$sql1);

//针对结果判断
if(!$rst0){
    if(!$insert0) {
        $response = "1";
        echo json_encode($response);
    }
    else{
        $response= "2";
        echo json_encode($response);
    }
}
if($rst0){
    //用户名已经注册
    $response = "3";
    echo json_encode($response);
}