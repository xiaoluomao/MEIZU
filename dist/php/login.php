<?php
header('Access-Control-Allow-Origin: *');


$userName = $_GET['userName'];
$password = $_GET['password'];


$link = mysqli_connect('localhost','root','root','user');
mysqli_set_charset( $link, "utf8" );
$select_sql = "select * from meizu where username='$user' ";
$select_res = mysqli_query($link,$select_sql);
$aaa = mysqli_fetch_assoc($select_res);
if($aaa){
    $arr =[
        "msg"=>"用户名已存在",
        "stat"=>-1
    ];
}else{
    $add = "insert into meizu (username,password) values ('$userName','$password')";
    $sss = mysqli_query($link,$add);
    $arr =[
        "msg"=>"注册成功",
        "stat"=>200
    ];
};
echo json_encode($arr);
?>