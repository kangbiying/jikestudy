function result(){
	var myArray=new Array("a","x","b","d","m","a","k","m","p","j","a");
	var count=[];
	var pos=[];
	//打印数组 遍历数组 统计每个数字出现次数以及位置
	myArray.forEach(function(value,index){
		if(!count[value]){
			count[value]=1;
			pos[value]=""+index;
		}else{
			count[value]++;
			pos[value]=pos[value]+","+index;
		}
	});
	// console.log(count);
	// console.log(pos);
	// 找到出现次数最多的
	var max=0;
	var n;
	for(i in count){
		if(count[i]>max){
			max=count[i];
			n=i;
		}
	}
	alert("数组: "+myArray+" 中出现次数最多的是: "+n+" 位置分别分布在: "+pos[n]);
}



