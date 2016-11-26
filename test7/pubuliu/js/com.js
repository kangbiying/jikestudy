$(document).ready(function(){
	$(window).on('load',function(){
		imgLocation();
		var dataImg={"data":[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'}]}
		window.onscroll=function(){
			if(scrollside()){
				$.each(dataImg.data,function(index,value){
					var box=$("<div>").addClass('box').appendTo($('.container'));
					var content=$("<div>").addClass('content').appendTo(box);
					//console.log('./img/'+$(value).attr('src'));
					$("<img>").attr('src','./img/'+$(value).attr('src')).appendTo(content);
				})
				imgLocation();
			}
		}
	})
})
function scrollside(){
	var box=$('.box');
	var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight=$(document).height();
	var scrollHeight=$(window).scrollTop();
	console.log(documentHeight);
	return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}
function imgLocation(){
	var box=$('.box');
	var boxwidth=box.eq(0).width();
	var num=Math.floor($(window).width()/boxwidth);
	//console.log(num);
	var boxArr=[]; //存储盒子高度
	box.each(function(index,value){
		//console.log('index:'+index+',value:'+value);
		var boxheight=box.eq(index).height();
		if(index<num){
			boxArr[index]=boxheight;
			//console.log(boxheight);
		}else{
			var minboxHeight=Math.min.apply(null,boxArr);
			//console.log(minboxHeight);
			var minboxIndex=$.inArray(minboxHeight, boxArr); //返回数组中指定元素的索引值。
			//console.log(minboxIndex);
			//console.log(value);
			$(value).css({
				'position':'absolute',
				'top':minboxHeight,
				'left':box.eq(minboxIndex).position().left
			})
			boxArr[minboxIndex]=boxArr[minboxIndex]+boxheight;
		}
	})
}
$(window).resize(function(){
	location.reload();
})