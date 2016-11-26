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
	// echo $sql;
	// if(1mysqli_query($con,$sql)){
	// 	echo "<script>
	// 		alert("更新成功！");
 //          $('.m-edit-box').hide();
 //          $(".page-body").show();
 //          getList();</script>";
	// }else{
	// 	echo "<script>
	// 		alert("更新失败！");
 //          </script>";
	// }

	if(mysqli_query($con,$sql)){
	 	echo "<script>alert('更新成功');</script>";
	 }else{
	 	echo "<script>alert('更新失败');</script>";
	 }
	// $status=mysqli_query($con,$sql);
	// echo $status;
?>