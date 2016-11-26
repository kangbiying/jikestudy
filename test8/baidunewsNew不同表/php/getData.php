<?php 
	require_once('connect.php');
		
	$newsType=$_REQUEST['newsType'];

	$sql="select * from $newsType order by newsid desc";
	mysqli_query($con,"set names 'utf8'");
	$query=mysqli_query($con,$sql);

	//获取新闻数据  mysql_num_rows() 函数返回结果集中行的数目。
	//mysql_fetch_assoc() 函数从结果集中取得一行作为关联数组

	if($query&&mysqli_num_rows($query)){
		while ($row=mysqli_fetch_array($query,MYSQLI_ASSOC)) {
			$data[]=$row;
		}
	}else if(mysqli_num_rows($query)==0){
		$data="blank";
	}

	//转换为json
	$jsonData=json_encode($data,JSON_UNESCAPED_UNICODE);
	echo $jsonData;
?>