<?php
    header('content-type:text/html;charset="utf-8"');
    $usernamefile = fopen("../txt/username.txt",'r');
    $username = fgets($usernamefile);
    fclose($usernamefile);

//链接数据库
    $connection = mysqli_connect("localhost","root","123456");

    $response = array("name"=>"","username"=>"","wareId"=>"","gender"=>"");
//判断连接是否成功
    if(!$connection){
        $response['code'] = 0;
        $response['message'] = "Fail to connect";
        exit;
    }

    mysqli_set_charset($connection,"utf8");
//选择数据库
    mysqli_select_db($connection,"warehouseManage");

//定义sql语句
    $sql0 = "SELECT * FROM worker where workerID ='{$username}'";
//sql0对应的访问
    $query0 = mysqli_query($connection,$sql0);
//sql0对应的访问结果
    $rst0 = mysqli_fetch_assoc($query0);
//针对结果判断
if(!$rst0){

}
else{
    $response['name']=$rst0['workerName'];
    $response['username']=$rst0['workerID'];
    $response['wareId']=$rst0['wareID'];
    $response['gender']=$rst0['gender'];
    echo json_encode($response);
}

