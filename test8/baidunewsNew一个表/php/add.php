<?php 	

	require_once('connect.php');
	//将传递过来的信息入库 在入库前进行校验
	//isset 是否存在
	 // if(!(isset($_POST['title'])&&(!empty($_POST['title'])))){
	 // 	echo "<script>alert('标题不能为空');window.location.href='../home.html';</script>";
	 // };
	
	$newstype=$_POST['newstype'];
 	$newstitle=$_POST['newstitle'];
	$newsimg=$_POST['newsimg'];
	$newscontent=$_POST['newscontent'];
	$addtime=$_POST['addtime'];
	// print_r($_POST);
	// $insertsql="insert into $newstype (`newstitle`, `newsimg`, `newscontent`, `addtime`) values ($newstitle,$newsimg,$newscontent,$addtime)";
	
	$insertsql="insert into `recommend`(newstype,newstitle, newsimg, newscontent, addtime) values ('$newstype','$newstitle','$newsimg','$newscontent','$addtime')";
	// echo $insertsql;
	$status = mysqli_query($con,$insertsql);
	echo $status;

?>
