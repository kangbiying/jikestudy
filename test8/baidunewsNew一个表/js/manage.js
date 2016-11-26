var Manage={
	newstype:'0'
};

(function(){
	getList();
	xzType();
})();

function getList(){
  $.ajax({
    type:"post",
    url: "php/getData.php",
    data:{
    	newsType:Manage.newstype
    },
    dataType:"json",
    success:function(data){
      var html='';
      for(var i = 0; i < data.length; i++){
        html+='<tr><td class="numid">'
              +data[i].newsid
              +'</td><td class="numtit">'
              +data[i].newstitle
              +'</td><td><img src="'
              +data[i].newsimg
              +'" alt="" style="width: 100px;" class="numpic"></td><td class="numtxt">'
              +data[i].newscontent
              +'</td><td><a href="#" class="btn btn-primary btn-xs edit-btn" style="margin: 0 5px 5px 0;">编辑</a><a href="#" class="btn btn-primary btn-xs delt-btn">删除</a></td></tr>'
      };
      $(".table tbody").html(html);
    },
    error:function(){ 
      alert("加载失败");
    }
  })
}

//切换不同新闻类型 从而选择不同数据表
function xzType(){
	$(".page-type>a").on('click',function(event){
		event.preventDefault();
		$(this).addClass('cur').siblings().removeClass('cur');
		Manage.newstype=$(this).data('id');
		getList();
		// console.log(Manage.newstype);
	})
}

//删除
$(document).on("click",".delt-btn", function(event){
    event.preventDefault();
    $numid=$(this).parents('tr').find('.numid').html();
    // console.log($numid);
    Manage.newstype=$(".page-type>a.cur").data('id');
     $.ajax({
       type:"post",
        url: "php/delete.php",
        dataType:"json",
        data: {
        	newstype:Manage.newstype,
          	numid: $numid
        },  
        success:function(data){
          if(data==1){
              alert("删除成功");
              $(this).parents('tr').hide();
              getList();
          }else{
            alert("删除成功");
          }
        },
        error:function(){ 
          alert("请求失败！");
        }
    });
    
})
//编辑
 $(document).on("click",".edit-btn", function(event){
     event.preventDefault();
    $(".page-body").hide();
    $('.m-edit-box').show();
    $numid=$(this).parents('tr').find('.numid').html();
    $numtit=$(this).parents('tr').find('.numtit').html();
    $numpic=$(this).parents('tr').find('.numpic').attr('src');
    $numtxt=$(this).parents('tr').find('.numtxt').html();
    console.log($numid);
    $('#newsid').val($numid);
    $('#newstitle').val($numtit);
    $('#newsimg').val($numpic);
    $('#newscontent').val($numtxt);
    // editNews();
})
$('.modify-btn').on('click',function(){
  editNews();
})
function editNews(){
  // var numid=$('#newsid').val();
  var newstitle=$('#newstitle').val();
  var newsimg=$('#newsimg').val();
  var newscontent=$('#newscontent').val();
  $.ajax({
      type:"post",
      url: "php/modify.php",
      dataType:"json",
      data: {
          numid:$numid,
          newstitle: newstitle,
          newsimg: newsimg,
          newscontent: newscontent
      },
      success:function(){
         $('.m-edit-box').hide();
         $(".page-body").show();
          getList();
      },
      error:function(){ 
        alert("请求失败！");
      }
  })
}