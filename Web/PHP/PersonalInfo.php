<?php
header('content-type:text/html;charset="utf-8"');
//读取用户名
$usernamefile = fopen("../txt/username.txt",'r');
$username = fgets($usernamefile);
fclose($usernamefile);

$password = $_POST['password'];
$workername = $_POST['workername'];
$wareId = $_POST['wareId'];
$gender = $_POST['gender'];

$response = array("code"=>"");
//链接数据库
$connection = mysqli_connect("localhost","root","123456");

$response = "";


mysqli_set_charset($connection,"utf8");
//选择数据库
mysqli_select_db($connection,"warehouseManage");

//定义sql语句
$sql0 = "UPDATE worker SET workerName = '{$workername}',workerPassword = '{$password}', wareID = '{$wareId}', gender = '{$gender}' WHERE workerID ='{$username}'";
$query0 = mysqli_query($connection,$sql0);

exit;