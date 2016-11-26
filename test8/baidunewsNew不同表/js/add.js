var HNEW={
	newsType:"recommend"
};

(function(){
	addNews();
	addType();
})();
function addNews(){
	$('.submit-btn').on('click',function(){
		HNEW.newsType=$('.add-type>a.cur').data('name');
	    var newstitle=$("#newstitle").val();
	    var newsimg=$("#newsimg").val();
	    var newscontent=$("#newscontent").val();
	    var addtime=$("#addtime").val();
	     // console.log(HNEW.newsType);
	    $.ajax({
		    type:"post",
		    url: "php/add.php",
		    dataType:"json",
		    data:{
		      newstype:HNEW.newsType,
		      newstitle:newstitle,
		      newsimg:newsimg,
		      newscontent:newscontent,
		      addtime:addtime
		    },
		    success: function (data) {
		    	if(data == '1'){
		      		alert("新闻发布成功");
		      		window.location.href='home.html';
		    	}else{
		    		alert("新闻发布失败");
		    		window.location.href='home.html';
		    	}
		    },
		    error: function () {
		      alert("服务器请求失败");
		     window.location.href='home.html';
		    }
		 })
	 })
};

function addType(){
	$(".add-type>a").on('click',function(event){
		event.preventDefault();
		HNEW.newsType=$(this).data('name');
		$(this).addClass('cur').siblings().removeClass('cur');

	});
};