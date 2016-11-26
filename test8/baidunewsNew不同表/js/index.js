var NEWS={
	newsType:"recommend"
};

(function(){
	showContent();
	chooseType();
})();

// var newsType='';
// $(".con-hd-menu>a").on('click',function(event){
// 	event.preventDefault();
// 	newsType=$(this).data('name');
// 	console.log(newsType);
// 	return newsType;
// })

function showContent(){
	$.ajax({
		type: "post",
		url: "php/getData.php",
		dataType: "json",
		data: {
	      newsType: NEWS.newsType
	  	},
		success: function (data) {
			// 如果没有数据，页面显示为空  否则遍历 显示新闻列表
			if(data=='blank'){
				$("<div>").addClass("news-box").attr("style","text-align:center").text("新闻列表为空").appendTo(
				".lists");
			}else{
				var html=''
				for(var i=0;i<data.length;i++){
					html+='<div class="news-items"><div class="news-item-pic"><a href="#"><img src="'
							+data[i].newsimg
							+'" alt=""></a></div><div class="news-item-main"><h4 class="news-item-tit"><a href="#">'
							+data[i].newstitle
							+'</a></h4><p class="news-item-txt">'
							+data[i].newscontent
							+'</p></div><div class="news-item-bottom"><div class="news-item-bt"><span class="tip-time">'
							+data[i].addtime
							+'</span></div></div></div>'
				}

				$(".news-list-wrap .news-lists").html(html);
			}
		},
		error: function () {
			alert("加载失败！")
		}
	})
}

//切换不同新闻类型 从而选择不同数据表
function chooseType(){
	$(".con-hd-menu>a").on('click',function(event){
		event.preventDefault();
		NEWS.newsType=$(this).data('name');
		console.log(NEWS.newsType);
		showContent();
	})
}