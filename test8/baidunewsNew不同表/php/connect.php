<?php 	
	//连库 选库 字符集
	require_once('config.php');

	$con=mysqli_connect(HOST,USERNAME,PASSWORD);

	mysqli_select_db($con,'info');
	mysqli_query($con,'set names utf8');

?>