<?php

header('content-type:text/html;charset="utf-8"');
//时间赋默认值


$connection = mysqli_connect("localhost",'root',"123456","warehouseManage");

//定义sql语句

$sql0 = "SELECT wareID,count(goodsID) as count FROM goods WHERE date < '2021-12-31' GROUP BY wareID";

$sql1 = "SELECT wareID,count(goodsID) as count FROM goods WHERE date < '2022-06-30' AND goodsID NOT IN (SELECT goodsID FROM goods WHERE date < '2021-12-31') GROUP BY wareID";

$sql2 = "SELECT wareID,count(goodsID) as count FROM goods WHERE date <= '2022-07-03' AND goodsID NOT IN (SELECT goodsID FROM goods WHERE date < '2022-06-30') GROUP BY wareID";

$sql3 = "SELECT wareID,count(goodsID) as count FROM goods WHERE date <= '2022-07-07' AND goodsID NOT IN (SELECT goodsID FROM goods WHERE date <= '2022-07-03') GROUP BY wareID";

$sql4 = "SELECT wareID,count(goodsID
    ) as count FROM goods WHERE date <= '2022-07-22' AND goodsID NOT IN (SELECT goodsID FROM goods WHERE date <= '2022-07-07') GROUP BY wareID";


//针对结果判断
$result_set = array();

$query0 = mysqli_query($connection,$sql0);
while($row=mysqli_fetch_assoc($query0)){
    $result_set[] = $row;
}

$query1 = mysqli_query($connection,$sql1);
while($row=mysqli_fetch_assoc($query1)){
    $result_set[] = $row;
}
$query2 = mysqli_query($connection,$sql2);
while($row=mysqli_fetch_assoc($query2)){
    $result_set[] = $row;
}
$query3 = mysqli_query($connection,$sql3);
while($row=mysqli_fetch_assoc($query3)){
    $result_set[] = $row;
}
$query4 = mysqli_query($connection,$sql4);
while($row=mysqli_fetch_assoc($query4)){
    $result_set[] = $row;
}

if(1){
    echo json_encode($result_set);
}
else{

}
