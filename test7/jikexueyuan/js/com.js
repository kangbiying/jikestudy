$(function(){
	// hd-nav
	$('.nav-left').hover(
		function(){
			$('.navpanel').show();
		},
		function(){
			$('.navpanel').hide();
		}
	)
	$('.nav-left>a').mouseover(function() {
		$(this).css('color', '#35b558').siblings().css('color', '#333');
		var index = $(this).index() - 1;
		//console.log(index);
		$('.panel-item').eq(index).css('background-color', 'rgb(247,247,247)')
		   .siblings().css('background-color', 'transparent');
		$('.angle').hide();
		$('.panel-item').eq(index).children('.angle').show();
	})
	//lesson-left
	$('.lesson-nav li>div').hover(
		function(){
			$('.lesson-list').hide();
			$(this).children('.lesson-list').show();
		},
		function(){
			$('.lesson-list').hide();
		}
	)
	//极客公开课
	$('.livebox-week>li').mouseover(function(){
		$(this).addClass('weekact').siblings().removeClass('weekact');
		var index=$(this).index();
		$('.livebox-lesson').find('.liveless-list').eq(index).show().siblings().hide();
	})
	//热门推荐
	$('.hot-lesson li').mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		$('.hotless-list').eq(index).show().siblings().hide();
	})
	//六个menu详情
	$('.hotless-list ul li').hover(
		function(){
			$(this).find('.lesson-play').show();
			$(this).find('p').css({
				'display':'block',
				'opacity':'1',
				'height':'52px'
			})
			$(this).children('.lesson-info').css({
				'z-index':'111',
			});
			$(this).children('.lesson-info').animate({
				'height':'175px'
			},500);
			$(this).find('.learn-number').show();
			$(this).find('.level').show();
			$(this).find('.lessicon').css('top','24px');
		},
		function(){
			$(this).find('.lesson-play').hide();
			$(this).find('p').slideUp(500);
			$(this).children('.lesson-info').animate({
				'height':'90px'
			},500);
			$('.learn-number').hide();
			$('.level').hide();
			$('.lessicon').css('top','0');
		}
	)
	//职业路径图
	$('.learn-card>a').hover(
		function(){
			$(this).css({
				 'border':'1px solid #35b558',
				  'border-right':'1px solid #35b558'
			});
			$(this).children('.learn-btn').css({
				'background':'#35b558',
				'color':'#fff'
			})
		},
		function(){
			var index=$(this).index();
			if(index==4){
				$(this).css({
					 'border-color':'#e4e4e4',
					 'border-right':'1px solid #e4e4e4'
				})
			}else if(index==9){
				$(this).css({
					 'border-color':'#e4e4e4',
					 'border-right':'1px solid #e4e4e4',
					 'border-top':'0'
				})
			}else if(index>4&&index<9){
				//console.log(index);
				$(this).css({
					 'border-color':'#e4e4e4',
					 'border-right':'0',
					 'border-top':'0'
				})
			}else{
				$(this).css({
					 'border-color':'#e4e4e4',
					 'border-right':'0'
				})
			};
			$('.learn-btn').css({
				'background':'#f3fff6',
				'color':'#35b558'
			});
		}
	)
    //精品系列课程
    $('.excel-card').hover(
    	function() {
	    	$(this).find('.excel-detail').fadeIn();
	    },
	    function(){
	    	$(this).find('.excel-detail').hide();
	    }
    );
	//WIKI
	//$('.wiki-item dl').find('dd')

    jQuery(".slideBox").slide({
        mainCell: ".bd ul",
        effect: "leftLoop",
        easing: "linear",
        delayTime: 500,
        autoPlay: true
    });

	jQuery(".picScroll-left").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		autoPage: true,
		effect: "leftLoop",
		autoPlay: false,
		vis: 3,
		trigger: "click"
	});
	$('.picScroll-left').hover(
		function(){
			$(this).find('.hd').fadeIn();
		},
		function(){
			$(this).find('.hd').fadeIn();
		}
	)
	
	$('.company-box').hover(
		function(){
			$('.com-left,.com-right').fadeIn();
		},
		function(){
			$('.com-left,.com-right').fadeOut();
		}
	)
	var aswiper=$('.comswiper-wrap>a');
	var boxwidth=Number(aswiper.width())+Number(aswiper.css('margin-right').substr(0,2));
	var shownum=Math.round($('.com-container').width()/boxwidth);
	//console.log(shownum);
	var i=0;
	var left;
	var num=aswiper.length;
	//console.log(num);
	var range=num-shownum;
	console.log(range);
	// 战略合作企业
	$('.com-left').on('click',function(){
		if(i<0){
			i++;
			left=162*i;
			$(".comswiper-wrap").animate({marginLeft:left});
			console.log('left:'+i);
		}else{
			$('.com-left').css('background-position','-10px -5px');
		}
	})
	$('.com-right').on('click',function(){
		if(i>(-range)){
			i--;
			console.log('right:'+i);
			var right=162*i+'px';
			$(".comswiper-wrap").animate({marginLeft:right});
		}else{
			//return false;
			$('.com-right').css('background-position','-10px -5px');
		}
	})
	

})