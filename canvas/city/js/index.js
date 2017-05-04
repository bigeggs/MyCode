$(function(){
	
	$(".tuozhuai").Tdrag({
		scope:".box"
	});
	$('.nav_ce p').click(function(){
		$(this).siblings('ul').toggle();
		$(this).children('.zhankai').toggle();
		$(this).children('.xiala').toggle();
	})
	$('.tuozhuai li').click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
	})
	
	
	
	
//	用户偏好滚动
	function scroll1(){
		var text = $(".scrollBox li");
		var textNum = text.size();	
		var textWidth = text.outerWidth(true);
		var textBox = $(".scrollBox ul");
		textBox.width(textNum*textWidth);
		var i =0;
		$(".scroll_right").click(function(){
			i++;
			if(i>=textNum){
				i=textNum-1;
			}
			textBox.stop().animate({"left":-textWidth*i});
		});
		$(".scroll_left").click(function(){
			i--;
			if(i<=0){
				i=0;
			}
			textBox.stop().animate({"left":-textWidth*i});	
		});
	}
	scroll1();
//	地图文字折叠
	function zhedie(){
		$(".zhedie").click(function(){
			if($(this).hasClass('zhedie1')){
				$(".user_search ul").animate({'width':0,'opacity':0,'padding-left':0});
				$(this).removeClass('zhedie1').addClass('zhedie2');
			}else if($(this).hasClass('zhedie2')){
				$(".user_search ul").animate({'width':'125px','opacity':1,'padding-left':'8px'});
				$(this).removeClass('zhedie2').addClass('zhedie1');
			}
		})
	}
	zhedie();
//	点击放大
	$(".data_plus").click(function(){
		$(this).parent('.dataBox').clone().appendTo('.swiper-slide-plus').css({'height':'100%','margin':0,'width':'100%'}).addClass('plusBox');
		$(".swiper-prev").click();
		try{
			PieInit();
		}catch(e){
					CircleInit();
									HouseType();
		}
		$(".plusBox .data_plus").click(function(){
			$('.plusBox').remove();
			$(".swiper-next").click();
		})
	})
})
