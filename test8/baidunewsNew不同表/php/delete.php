<?php
require_once("connect.php");

$newstype=$_REQUEST['newstype'];
$newsid=$_REQUEST['numid'];

//更新相应新闻的数据

$sql="delete from $newstype where `newsid`=$newsid";

$status=mysqli_query($con,$sql);
echo $status;


?>
