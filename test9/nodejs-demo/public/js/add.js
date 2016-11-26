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
	    var newstitle=html_encode($("#newstitle").val());
	    var newsimg=html_encode($("#newsimg").val());
	    var newscontent=html_encode($("#newscontent").val());
	    var addtime=$("#addtime").val();
	     // console.log(HNEW.newsType);
	    if(newstitle==''){
	    	alert('请输入新闻标题');
	    	return false;
	    };
	    if(newsimg==''){
	    	alert('请输入新闻图片');
	    	return false;
	    };
	    if(newscontent==''){
	    	alert('请输入新闻内容');
	    	return false;
	    };
	    if(addtime==''){
	    	alert('请输入新闻时间');
	    	return false;
	    };
	    $.ajax({
		   // type:"post",
		    url: "home/add",
		    dataType:"json",
		    data:{
		      newstype:HNEW.newsType,
		      newstitle:newstitle,
		      newsimg:newsimg,
		      newscontent:newscontent,
		      addtime:addtime
		    },
		    success: function () {
		    	alert("新闻发布成功");
		      	window.location.href='http://localhost:3000/home';
		    },
		    error: function () {
		      alert("服务器请求失败");
		      window.location.href='http://localhost:3000/home';
		    }
		 })
	 })
};

function addType(){
	$(".add-type>a").on('click',function(event){
		event.preventDefault();
		HNEW.newsType=$(this).data('id');
		$(this).addClass('cur').siblings().removeClass('cur');

	});
};

function html_encode(str)   
  {   
    var s = "";   
    if (str.length == 0) return "";   
    s = str.replace(/&/g, "&gt;");   
    s = s.replace(/</g, "&lt;");   
    s = s.replace(/>/g, "&gt;");   
    s = s.replace(/ /g, "&nbsp;");   
    s = s.replace(/\'/g, "&#39;");   
    s = s.replace(/\"/g, "&quot;");   
    s = s.replace(/\n/g, "<br>");   
    return s;   
  }   