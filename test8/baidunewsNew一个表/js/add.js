var HNEW={
	newsType:"0"
};

(function(){
	addNews();
	addType();
})();
function addNews(){
	$('.submit-btn').on('click',function(){
		HNEW.newsType=$('.add-type>a.cur').data('id');
	    var newstitle=$("#newstitle").val();
	    var newsimg=$("#newsimg").val();
	    var newscontent=$("#newscontent").val();
	    var addtime=$("#addtime").val();
	    // console.log(HNEW.newsType);
	    if(newstitle==''){
	    	alert('请输入新闻标题！');
	    	return false;
	    };
	    if(newsimg==''){
	    	alert('请输入图片地址！');
	    	return false;
	    };
	    if(newscontent==''){
	    	alert('请输入新闻内容！');
	    	return false;
	    };
	    if(addtime==''){
	    	alert('请输入新闻时间！');
	    	return false;
	    };
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
		 });
	  
	  });  
};

function addType(){
	$(".add-type>a").on('click',function(event){
		event.preventDefault();
		HNEW.newsType=$(this).data('name');
		$(this).addClass('cur').siblings().removeClass('cur');

	});
};