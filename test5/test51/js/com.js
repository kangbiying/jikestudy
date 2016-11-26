// 判断等级
function grade(){
	var score=document.getElementById("score").value;
	var judge=document.getElementsByName("judge");
	var x;
	var s=parseInt(score/10);
	switch(s){
		case 10:x="该生等级: 一等";break;
		case 9:x="该生等级: 一等";break;
		case 8:x="该生等级: 二等";break;
		case 7:x="该生等级: 三等";break;
		case 6:x="该生等级: 四等";break;
		case 5:x="该生等级: 五等";break;
		case 4:x="该生等级: 六等";break;
		case 3:x="该生等级: 七等";break;
		case 2:x="该生等级: 八等";break;
		case 1:x="该生等级: 九等";break;
		case 0:x="该生等级: 十等";break;
		default:x="请输入1-100之间的分数";
	}
	document.getElementById("ptxt").innerHTML=x;
};

