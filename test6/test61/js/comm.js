window.onload=function(){
	var mess = document.getElementById("mess");
	var num1 = 0;
	var num2 = 0;
	var op;
	var dot = true; //小数点默认为真

	// 输入数字
	for(var i=0;i<10;i++){
		var num=document.getElementById("num"+i);
		num.onclick=function(){
			//console.log(this.value);
			if (mess.value == "0" || mess.value == "除数不能为0！") {
				mess.value = "";
			}
			num1 = mess.value;
			num1 = num1 + this.value;
			mess.value = num1;
			// 如果存在过等号,则清空等号以及运算结果
			if (op == "=") {
				op = "";
				mess.value = this.value;
				// alert(mess.value);	
			}
		}
		
	}
	
	var clear=document.getElementById("clear");
	// 清空
	clear.onclick=function(){
		mess.value = "0";
		dot = true;
		num1 = 0;
		num2 = 0;
	}
	// 获取操作符
	// function cal(act) {
	// 	// 前两个数字都不为空时，点击第二个操作符
	// 	if (num1 != "" && num2 != "") {
	// 		count();
	// 	}
	// 	num2 = "";
	// 	op = act;
	// 	// 如果显示栏不为空时也就是存在第一个数字时
	// 	if (mess.value != "") {
	// 		num2 = num1; //将第一个数字保存
	// 		mess.value = "";
	// 		dot = true;
	// 	}
	// }
	for(var i=0;i<4;i++){
		var cal=document.getElementById("cal"+i);
		cal.onclick=function(act){
			if (num1 != "" && num2 != "") {
				count();
			}
			num2 = "";
			op = act;
			// 如果显示栏不为空时也就是存在第一个数字时
			if (mess.value != "") {
				num2 = num1; //将第一个数字保存
				mess.value = "";
				dot = true;
			}
		}
	}
	
	// 运算符=
	// var count=document.getElementById("count");
	// var sign=document.getElementsByClassName("sign");
	// console.log(sign);
	// for(var i=0;i<sign.length;i++){
	// 	count.onclick=function() {
	// 	 	//alert("num1:"+num1+"    	mum2:"+num2+"   	  op:"+op);
	// 		switch (op) {
	// 			case '+':
	// 				mess.value = parseFloat(num2) + parseFloat(num1);
	// 				break;
	// 			case '-':
	// 				mess.value = parseFloat(num2) - parseFloat(num1);
	// 				break;
	// 			case '*':
	// 				// mess.value = parseFloat(num2) * parseFloat(num1);
	// 				mess.value = parseFloat((num2*num1).toFixed(5));
	// 				break;
	// 			case '÷':
	// 				// 判断除数是否为0，如果为0则弹出信息，否则正常运算
	// 				if (num1 == "0") {
	// 					mess.value = "除数不能为0！";
	// 					return;
	// 				}
	// 				 //mess.value = parseFloat(num2) / parseFloat(num1);
	// 				 // mess.value = parseFloat((num2/num1).toFixed(5));
	// 				 mess.value = parseFloat((num2/num1).toFixed(5));
	// 				break;
	// 		}
	// 		// mess.value = Math.round(mess.value*100000000000)/100000000000; 
	// 		num1 = mess.value;
	// 		op = "=";
	// 	}
	// }
	

	// 获取小数点
	var point=document.getElementById("point");
	point.onclck=function(ans) {
		if (ans && dot) {        //点击小数点并为真时
			if (mess.value == ""||mess.value<1) {
				mess.value = "0";
			}
			if (mess.value != "" && count == "=") {
				mess.value = "0";
			}
			mess.value = mess.value + ans;
			dot = false;
		}
	}
	// function setdot(ans) {
	// 	if (ans && dot) {        //点击小数点并为真时
	// 		if (mess.value == ""||mess.value<1) {
	// 			mess.value = "0";
	// 		}
	// 		if (mess.value != "" && count == "=") {
	// 			mess.value = "0";
	// 		}
	// 		mess.value = mess.value + ans;
	// 		dot = false;
	// 	}
	// }
	// 正负号
	function neg(){
		mess.value=-mess.value;
	}
	// 百分比
	function percent(){
		mess.value=parseFloat(mess.value/100);
	}
	// 平方
	function square(){
		mess.value=Math.pow(mess.value,2);
	}
	// 开方
	function sqrt(){
		if(mess.value<0){
			alert("请输入正数");
			mess.value="";
		}
		mess.value=Math.sqrt(mess.value);
	}
	// 倒数
	function recip(){
		mess.value=1/mess.value;
	}
}
