// JavaScript Document
var obj=document.getElementById("result");
var firnum,lastnum,count;
var dot=true; //小数点开关为真
var press=true;
//向显示框添加数字
function setNum(num){
	//如果当前值为0时，显示框为空
	if(obj.value=="0"){  
		obj.value="";
	}
	//显示输入的num值
	firnum=obj.value; 
	firnum=firnum+num;
	obj.value=firnum;
	//如果存在过等号，则将等号计算的数字清除，显示框显示输入的数字，并清除运算符
	if(count=="="){
		if(obj.value<1){
			obj.value=obj.value;
		}else{
			obj.value=num;			
		}
		count="";	
	}
	
}
//获取运算符
function setFh(act){ 
	//实现连续操作所需   如果前两个数存在时，点击第二个运算符，则对前两个数进行运算并保存。
	if(firnum!=""&&lastnum!=""){ 
		calculate();
	}
	lastnum="";   //清空连续操作时保存的lastnum值，以便进行累加，否则累加错误。
	count=act; 
	//如果显示框不为空，当运算符出现结束firnum，用变量lastnum存储运算符之前的数字。
	if(obj.value!=""){
		lastnum=firnum;
		obj.value="";
		//firnum = "";
		dot=true;          //刷新为真
	}	
	/*if(lastnum!=""&&count!="")      
	{
		firnum=0;
	}
	*/

} 

//进行运算
function calculate(){
	//alert("firnum:"+firnum+"    	lastnum:"+lastnum+"   	  count:"+count);
	switch(count){
		case "+":
			obj.value=parseFloat(firnum)+parseFloat(lastnum);
			break;
		case "-":
		    obj.value=parseFloat(lastnum)-parseFloat(firnum);
			break;
		case "*":
			obj.value=parseFloat(firnum)*parseFloat(lastnum);
			break;
		case "/":
			 // 判断除数是否为0，如果为0则弹出信息，否则正常运算
			if(firnum=="0"){
				obj.value="除数不能为0！";
				return;
			}
			obj.value=parseFloat(lastnum)/parseFloat(firnum);
			break;
	}
	
	obj.value = Math.round(obj.value*100000000000)/100000000000; 
	firnum = obj.value;  //当前值保存给firnum
	count="=";      //运算符保存为等号
}

//清空显示框当前信息操作
function sclear(){
	obj.value="0";
	dot=true;
	firnum=0;
	lastnum=0;
	dot=true;
}

//小数点
function checkdot(ans){
	if(ans&&dot){       ////当按下"."并且dot为初始值true时运行，显示"."在数字后面
  		if(obj.value==""){
				obj.value="0";
		}
		if(obj.value!=""&&count=="="){
			obj.value="0";
		}
		obj.value=obj.value+ans;
		dot=false;                    //小数点出现一次后 开关为false
	}
	/*判断是否存在一个小数点
	for(i=0;i<obj.value.length;i++)
	  
		如果有则不再插入小数点
		substr()方法可在字符串中抽取从start下标开始的指定数目的字符  stringObject.substr（start,length）         
		if(obj.value.substr(i,1)==".")
		{   
			return false;
		}
	obj.value=obj.value+".";
	*/
}

//添加负号
function minus(){
	obj.value=-obj.value;   //为当前值添加负号  
	firnum=obj.value;
	//判断是否存在一个负号
	/*for(i=0;i<obj.value.length;i++){
			//如果存在负号则不再插入
			if(obj.value.substr(i,1)=="-")
			return false;
		}
	
	alert(obj.value);*/
}
