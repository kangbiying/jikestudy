<?php 
	require_once('connect.php');
		
	$newsType=$_REQUEST['newsType'];

	//newstype为0,1,2时分别代表新闻类别 为推荐，百家，本地
	$sql="select * from `recommend` where newstype=$newsType order by newsid desc";
	//echo $sql;
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