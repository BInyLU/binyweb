$(function(){
			//下拉效果
		$(".nav-list").mouseenter(function(){
		$(this).find('.cserj').stop().slideDown({duration:600,easing:'easeOutBounce'});
	
	})
		$(".nav-list").mouseleave(function(){
		$(this).find('.cserj').stop().slideUp(600);
	
	})
	
//		全部变量
	var num = 0;
	
//      显示隐藏函数	
	function xy(){
		
//		找到banner下的img 让它显示,并且让它的同级元素隐藏
		$('#banner img').eq(num).fadeIn(300).siblings('img').fadeOut(300);
//		找到banner的li 让li添加retive样式, 并且让它同级元素移除retive样式
		$("#banner ul li").eq(num).addClass('retive').siblings().removeClass('retive');
				}
		
//		定时器函数
	function run(){
		num++;
		if(num>3){
			num=0		
		}
		xy();	
	}
	
//		设置定时器
	 var timer = setInterval(run,1300);
	
//		添加鼠标经过事件
	$("#banner").hover(function(){
		clearInterval(timer);		
	},function(){
		timer = setInterval(run,1300);
	})
	
//	  添加左侧点击事件
	$("#banner .bannerleft").click(function(){
		num--;
		if(num<0){
			num=3
		}
		xy();
	})
//	添加右侧点击事件
	$("#banner .bannerright").click(function(){
		num++;
		if(num>3){
			num=0
		}
		xy();
	})
	
	
})