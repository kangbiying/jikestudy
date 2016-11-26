<?php 
	require_once('connect.php');
	//读取旧信息
	$newsid=$_REQUEST['newsid'];
	$newstitle=$_REQUEST['newstitle'];
	$newsimg=$_REQUEST['newsimg'];
	$newscontent=$_REQUEST['newscontent'];
	// echo $newsid;
	$sql="update `recommend` set newstitle='$newstitle',newsimg='$newsimg',
	newscontent='$newscontent' where newsid=$newsid";


	if(mysqli_query($con,$sql)){
	 	echo "<script>alert('更新成功');window.location='../h-manage.html';</script>";
	 }else{
	 	echo "<script>alert('更新失败');window.location='../h-manage.html';</script>";
	 }

?>