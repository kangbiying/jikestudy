var NEWS={
	newsType:"0"
};

(function(){
	showContent();
	chooseType();
})();

function showContent(){
	$.ajax({
		//type: "post",
		url: "/data",
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
			alert("请求失败");
		}
	})
}

//切换不同新闻类型 从而选择不同数据表
function chooseType(){
	$(".con-hd-menu>a").on('click',function(event){
		event.preventDefault();
		NEWS.newsType=$(this).data('id');
		console.log(NEWS.newsType);
		showContent();
	})
}