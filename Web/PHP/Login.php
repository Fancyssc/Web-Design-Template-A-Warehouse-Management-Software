<?php
    header('content-type:text/html;charset="utf-8"');

    $username = $_POST['username'];
    $password = $_POST['password'];

//链接数据库
    $connection = mysqli_connect("localhost","root","123456");

    $response = array("code"=>"","message"=>"");

    mysqli_set_charset($connection,"utf8");
    //选择数据库
    mysqli_select_db($connection,"warehouseManage");

    //定义sql语句
    $sql0 = "SELECT * FROM worker where workerID ='{$username}' AND workerPassword = '{$password}'";
    //sql0对应的访问
    $query0 = mysqli_query($connection,$sql0);
    //sql0对应的访问结果
    $rst0 = mysqli_fetch_assoc($query0);
    //针对结果判断
    if(!$rst0){
        $response['code'] = 2;
        $response['message']= 'Unsuccess!';
        echo json_encode($response);
    }
    else{
        $response['code'] = 1;
        $response['message']= 'Success!';
        $usernamefile = fopen('../txt/username.txt','w');
        //文件读写
        //保存username
        fwrite($usernamefile,"$username");
        fclose($usernamefile);
        echo json_encode($response);
    }
