$(function(){
	//header 消息
	$('.hd-msg').click(function(){
		$('.hd-mod-msg').toggle();
	})
	//我的昵称
	$('.ht-user').hover(
		function(){
			$('.hr-user-menu').show();
		},
		function(){
			$('.hr-user-menu').hide();
		}
	)
	$('.hr-user-menu,.hr-set-menu,.r-pro,.hot-details').hover(
		function(){
			$(this).show();
		},
		function(){
			$(this).hide();
		}
	)
	//设置
	$('.hr-set').hover(
		function(){
			$('.hr-set-menu').show();
		},
		function(){
			$('.hr-set-menu').hide();
		}
	)
	//更多产品
	$('.hr-pro-bri').hover(
		function(){
			$('.r-pro').show();
		},
		function(){
			$('.r-pro').hide();
		}
	)
	//实时热点
	$('.hot-m-tit>a').hover(
		function(){
			// setTimeout(function(){
				$(this).siblings('.hot-details').show();
			// },speed);
		},
		function(){
			$(this).siblings('.hot-details').hide();
		}
	)
	function runmore(){
		$('.c-con-inner').css({
			'overflow':'auto',
			'height':'auto'
		});
		var h=$(document).height();
		//console.log(h);
		$('body').css('height',h);
		$('.c-more-bar').hide();
		$('.c-main').css('margin-bottom','30px');
		if(h>500){
			$('.top-feed').fadeIn();
		}
		$('.fixed-top').fadeIn();
	}
	//点击滚动查看更多
	$('.c-more-bar').click(function(){
		runmore();
	})
	
	$(document).on("mousewheel DOMMouseScroll", function (e) {
	    
	    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
	                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
	    if (delta > 0) {
	        // 向上滚
	        //console.log("wheelup");
	        $('.fixed-top').fadeOut();
	        $('.top-feed').fadeOut();

	    } else if (delta < 0) {
	        // 向下滚
	        //console.log("wheeldown");
	       runmore();
	        
	    }
	});
	//删除
	$('.del').click(function(){
		$(this).parent('.news-item').hide();
	})
	//我的关注
	$('.s-menu-mine').on('click',function(){
		$(this).addClass('on');
		$('.c-news').eq(0).show().siblings().hide();
		$('.c-menu-item').removeClass('on');
	})
	$('.c-menu-item').on('click',function(){
		$('.s-menu-mine').removeClass('on');
		var index=$(this).index()+1;
		$(this).addClass('on').siblings().removeClass('on');
		$('.c-news').eq(index).show().siblings().hide();
	})
	//返回顶部
	$('.top-feed').on('click',function(){
		 // var scrollValue=$(window).scrollTop();
		 // console.log(scrollValue);
		$("html,body").animate({scrollTop:0},1500);
	})
})